import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplatesService {
  basrUrl = 'http://localhost:3001/api/v1';
  constructor(private myHttp: HttpClient) {
  }

  getAllTemplate() {
    return this.myHttp.get(this.basrUrl + '/template/getAllTemplates')
  }

}
