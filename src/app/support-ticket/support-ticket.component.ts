import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'yuj-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent implements OnInit {
  @ViewChild("supportF") supportForm: any; //one to get access all value or control inside template 
  myName: any

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
  constructor() { }

  ngOnInit(): void {
  }

  submitMyform() {
    console.log(this.supportForm.value)
    //console.log(this.supportModule)
  }
}
