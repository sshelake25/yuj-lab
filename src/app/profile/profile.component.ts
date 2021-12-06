import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() personName!: string;

  


  constructor() { }

  ngOnInit(): void {
  }

}
