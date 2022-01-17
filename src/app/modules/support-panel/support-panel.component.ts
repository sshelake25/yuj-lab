import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'yuj-support-panel',
  templateUrl: './support-panel.component.html',
  styleUrls: ['./support-panel.component.css']
})
export class SupportPanelComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    // private ars: ActivatedRouteSnapshot
  ) { }

  ngOnInit(): void {
    console.log(this.activatedRoute)
    // console.log(this.ars)

    this.activatedRoute.queryParams.subscribe(data =>
      console.log(data)
    )

    this.activatedRoute.data.subscribe(
      user => console.log(user)
    )

    console.log('in support panel lazy loaded module')
  }

}
