import { Component, OnDestroy, OnInit } from '@angular/core';
import { ConfigService } from '../services/config.service';

export interface Location {
  name: string;
  shortDes: string;
}

// export interface AllLocations {
//   locations: Location[];
// }

@Component(
  {
    selector: 'yuj-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
  }
)

export class HeaderComponent implements OnInit, OnDestroy {
  public myname = 'surekha shelake';
  public locations!: Location;

  public personList = [
    'ab',
    'dd',
    'dsd'
  ];



  constructor(private configSrv: ConfigService) { }

  ngOnInit() {
    this.configSrv
      .getLocations()
      .subscribe(
        (locations: any) =>
          this.locations = locations
      )
  }

  ngOnDestroy() {
    let myaddd = this.getAddress();
  }

  getAddress(): string {
    return 'pune';
  }

}
