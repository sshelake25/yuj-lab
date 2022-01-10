import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
   name = 'YUJ desing';

  constructor(private myhttp: HttpClient) { }

  getAllUser() {
    return this.myhttp.get('/api/user');
  }
 

}
