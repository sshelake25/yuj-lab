import { Component, OnDestroy, OnInit } from '@angular/core';

@Component(
  {
    selector: 'yuj-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  }
)

export class HeaderComponent implements OnInit, OnDestroy {
  public myname = 'surekha shelake';

  public personList = [
    'ab',
    'dd',
    'dsd'
  ];

 

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy() {
    let myaddd = this.getAddress();
  }

  getAddress(): string {
    return 'pune';
  }

}
