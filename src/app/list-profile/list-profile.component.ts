import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfigService } from '../services/config.service';
import { ProductService } from '../services/product.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'yuj-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  public productProfiles: any;

  constructor(
    private configSrv: ConfigService,
    private productSrv: ProductService,
    private profileSrv: ProfileService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.productSrv
      .getProductList()
      .subscribe(data => {
        console.log(`data comming from node backend`);
        console.log(data)
      })


    this.productProfiles = this.productSrv.getProductProfiles();


    this.configSrv.getConfigs().subscribe((data) => {
      console.log(data);
    });
  }

}
