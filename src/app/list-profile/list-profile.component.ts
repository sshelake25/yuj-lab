import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'yuj-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  public productProfiles = [
    {
      name: 'Build',
      shotDescription: 'Acc backend development with fully managed suite',
      linkTitle: 'View all product for Build',
      productFeatures: ['Cloud firestore', 'Authenication']
    },
    {
      name: 'Relase and Monitoring',
      shotDescription: 'Acc backend development with fully managed suite',
      linkTitle: 'View all product Relase and Monitoring',
      productFeatures: ['File monitoring', 'Google Analis]t']
    },
    {
      name: 'Engage',
      shotDescription: 'Acc backend development with fully managed suite',
      linkTitle: 'View all product list Engage',
      productFeatures: ['Remote firestore', 'Google Authenication']
    },
  ];

  constructor(
    private productSrv: ProductService,
    private profileSrv: ProfileService,
    private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    let pprod = this.productSrv.getProductList();
    console.log(pprod)

    console.log(this.profileSrv.name)

    
    console.log(this.route)

  }

}
