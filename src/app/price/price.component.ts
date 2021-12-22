import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {
  amount = 100;

  constructor() { }

  ngOnInit(): void {
  }

}
