import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'yuj-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    this.myhttp.get('https://httpstat.us/200?sleep=2000').toPromise();
  }

}
