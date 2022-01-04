import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  readTime: string = '';

  myConfig = {
    wordsPerMinute: 100,
  };

  imageUrl = '../../assets/images/product.jpg';
  hColor = 'red';

  // currentUsrRole= (user.i)

  constructor() { }

  ngOnInit(): void {
  }

  calculatedTime(time: string) {
    this.readTime = time;
  }

}
