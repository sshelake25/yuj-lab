import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class DemoInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.body) {

      let updateData = request.body["username"].replace(/pizza/gi, '🍕');
      const duplicate = request.clone({ body: updateData });

      return next.handle(duplicate);
    }
  
    return next.handle(request);
  }

}
