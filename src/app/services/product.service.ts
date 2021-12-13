import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  constructor() { }

  getProductList() {
    return [
      {
        name: 'Foo',
        desc: 'Foo desc',
        price: 24
      },
      {
        name: 'bar',
        desc: 'bar desc',
        price: 10
      }
    ]
  }

}
