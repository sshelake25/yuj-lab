import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
  HttpHeaders
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router,
    private storageSrv: StorageService) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let modifiedReq = this.addHeaders(request);

    return next.handle(modifiedReq).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) { //
          //navigate /delete cookies or whatever
          this.storageSrv.signOut();
          this.router.navigateByUrl(`/login`);
          // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
          return of(err.message); // or EMPTY may be appropriate here
        }
        return throwError(err);
      })
    )
  }

  addHeaders(req: HttpRequest<unknown>) {
    let headersProp = {
      'x-access-token': this.storageSrv.getToken() ? this.storageSrv.getToken() : '',
      'Content-Type': 'application/json',
      'x-uuser-role': 'admin'
    }

    const headers = new HttpHeaders(headersProp);

    const cloneReq = req.clone({ headers });
    return cloneReq;
  }


}


