import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  // myclass= {
  //   saveable: this.canSave,
  //   modified: !this.isUnchanged,
  //   special:  this.isSpecial
  // };

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
