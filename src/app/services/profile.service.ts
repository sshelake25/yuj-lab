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

  loginUser(loginData: any) {
    let loginDataConfig = {
      username: loginData.uname,
      password: loginData.passw
    };

    return this.myhttp.post('/api/user/login', loginDataConfig);
  }


}
