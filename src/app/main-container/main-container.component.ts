import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {
  personAdress = [
    'Pune', '50043', 'IND'
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getDetails(data: any) {
    console.log(JSON.stringify(data));
  }

}
