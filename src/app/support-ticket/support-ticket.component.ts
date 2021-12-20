import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-support-ticket',
  templateUrl: './support-ticket.component.html',
  styleUrls: ['./support-ticket.component.css']
})
export class SupportTicketComponent implements OnInit {
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

}
