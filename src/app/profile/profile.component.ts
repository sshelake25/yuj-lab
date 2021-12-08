import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'yuj-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() productConfigs!:any;


  @Output() loginDetails = new EventEmitter(); //

  profileUrl = './../../assets/images/product.jpg';

  isDisabled: boolean = false;


  details = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
      "batter":
        [
          { "id": "1001", "type": "Regular" },
          { "id": "1002", "type": "Chocolate" },
          { "id": "1003", "type": "Blueberry" },
          { "id": "1004", "type": "Devil's Food" }
        ]
    },
    "topping":
      [
        { "id": "5001", "type": "None" },
        { "id": "5002", "type": "Glazed" },
        { "id": "5005", "type": "Sugar" },
        { "id": "5007", "type": "Powdered Sugar" },
        { "id": "5006", "type": "Chocolate with Sprinkles" },
        { "id": "5003", "type": "Chocolate" },
        { "id": "5004", "type": "Maple" }
      ]
  }

  sayHello() {
    alert('ds')
  }
  constructor() { }

  ngOnInit(): void {
    this.loginDetails.emit(this.details);
  }

}
