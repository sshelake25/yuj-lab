import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { NotificationsServiceService } from '../services/notifications-service.service';

@Component({
  selector: 'yuj-notification-manager',
  templateUrl: './notification-manager.component.html',
  styleUrls: ['./notification-manager.component.css']
})
export class NotificationManagerComponent implements OnInit {
  nmCurrentCount$: Observable<number>;

  constructor(private notiSrv: NotificationsServiceService) { }

  ngOnInit(): void {
    this.nmCurrentCount$ = this.notiSrv.countHolder$;
  }

  getCountValue(callback: any) {
    this.notiSrv.countHolder$.pipe(first()).subscribe(callback);
  }

  addNotification() {
    // this.getCountValue((countVal: any) => {
    //   this.notiSrv.setCount(++countVal);
    // });

    this.notiSrv.countHolder$.pipe(first()).subscribe((countVal: any) => {
      this.notiSrv.setCount(++countVal);
    });

  }

  removeNotification() {
    // this.getCountValue((countVal: any) => {
    //   if (countVal === 0) {
    //     return;
    //   }

    //   this.notiSrv.setCount(--countVal);
    // });

    this.notiSrv.countHolder$.pipe(first()).subscribe((countVal: any) => {
      if (countVal === 0) {
        return;
      }

      this.notiSrv.setCount(--countVal);
    });
  }

  resetCount() {
    this.notiSrv.setCount(100);
  }



}
