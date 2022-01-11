import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable()
export class DemoInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // if (request.body) {

    //   let updateData = request.body["username"].replace(/pizza/gi, '🍕');
    //   const duplicate = request.clone({ body: updateData });

    //   return next.handle(duplicate);
    // }
  
    // return next.handle(request);


    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {

        if (event instanceof HttpResponse) {
          let camelCaseObject = mapKeys(event.body, (v, k) => camelCase(k));
          const modEvent = event.clone({ body: camelCaseObject });
          
          return modEvent;
        }
        return event;
      })
    );
    
  }

}
function mapKeys(body: any, arg1: (v: any, k: any) => any) {
  console.log(body,  arg1)
  // throw new Error('Function not implemented.');
}

function camelCase(k: any): any {
  // throw new Error('Function not implemented.');
}

