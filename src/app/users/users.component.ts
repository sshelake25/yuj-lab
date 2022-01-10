import { Component, OnInit } from '@angular/core';
import { first, Observable } from 'rxjs';
import { ProfileService } from '../services/profile.service';

// interface person {
//   last_name: string,
//   password: string,
//   username: string
// }

@Component({
  selector: 'yuj-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUser$: Observable<any> = this.myProfileSrv.getAllUser().pipe();

  constructor(private myProfileSrv: ProfileService) { }

  ngOnInit(): void {

  }

}
