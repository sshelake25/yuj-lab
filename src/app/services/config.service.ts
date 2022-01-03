import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  //  'api.yuj.com/product';
  baseUrl = 'assets/data/configs.json';

  constructor(
    private productSrv: ProductService,
    private routemy: ActivatedRoute,
    private http: HttpClient) {
  }

  getConfigs() {
    return this.http.get(this.baseUrl);
  }

  updateProductConfigs() {
    let products: any = this.productSrv.getProductList();
    return products[0];
  }

  getLocations() {
    return this.http.get('/api/location');
  }

}
