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

  public personDetails = [
    {
      name: 'foo',
      address: 'ppp',
      'age limit': 40
    },
    {
      name: 'bar',
      address: 'sas',
      'age limit': 20
    },
    {
      name: 'barfoo',
      address: 'asas',
      'age limit': 25
    }
  ]; // personDetails[2].name



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
