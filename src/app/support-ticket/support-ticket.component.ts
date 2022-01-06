import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { NotificationsServiceService } from '../services/notifications-service.service';

@Component({
  selector: 'yuj-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent implements OnInit {
  @ViewChild("supportF") supportForm: any; //one to get access all value or control inside template 
  myName: any
  myLoginData;

  // public supportModule = { // only value 
  //   ttitle: '',
  //   temail: '',
  //   tdesc: '',
  //   tseverity: ''
  // };

  severites = [
    // {
    //   title: 'Hight',
    //   value: 1
    // }
    'High',
    'Medium',
    'Low',
    'Not important'
  ]
  notificationHoder$: any;

  constructor(public dialog: MatDialog, 
    private notiSrv: NotificationsServiceService) {
    this.myLoginData = JSON.parse(localStorage.getItem('loginInfo') || '');
  }

  ngOnInit(): void {
    this.notificationHoder$ = this.notiSrv.countHolder$;
  }

  submitMyform() {

    sessionStorage.setItem('profile', JSON.stringify(this.supportForm.value))

    console.log(this.supportForm.value)
    //console.log(this.supportModule)
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
