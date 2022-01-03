import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  baseUrl = '/api/product';

  constructor(private http: HttpClient) { }

  getProductList() {
    return this.http.get(this.baseUrl);
  }

  getConfigs() {
    return this.http.get(this.baseUrl);
  }
  getProductProfiles() {

  }


}
