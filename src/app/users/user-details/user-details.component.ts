import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'yuj-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor( private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe(data => console.log(data))
    this.activedRoute.paramMap.subscribe(data => console.log(data))
  }

}
