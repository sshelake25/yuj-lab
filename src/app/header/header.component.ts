import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { NotificationsServiceService } from '../services/notifications-service.service';
import { StorageService } from '../services/storage.service';

export interface Location {
  name: string;
  shortDes: string;
}

// export interface AllLocations {
//   locations: Location[];
// }

@Component(
  {
    selector: 'yuj-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  }
)

export class HeaderComponent implements OnInit, OnDestroy {
  public myname = 'surekha shelake';
  public locations!: Location;

  notificationHoder$: Observable<number>;

  public personList = [
    'ab',
    'dd',
    'dsd'
  ];

  isloggedIn() {
    return !!this.storageSrv.getToken();
  }

  logoutUser() {
    this.storageSrv.signOut();
  }

  constructor(
    private configSrv: ConfigService,
    private notiSrv: NotificationsServiceService,
    private storageSrv: StorageService) { }

  ngOnInit() {

    this.notificationHoder$ = this.notiSrv.countHolder$;

    this.configSrv
      .getLocations()
      .subscribe(
        (locations: any) =>
          this.locations = locations
      )
  }

  ngOnDestroy() {
    let myaddd = this.getAddress();
  }

  getAddress(): string {
    return 'pune';
  }

}
