import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private router: Router) { }

  // private handleAuthError(err: HttpErrorResponse): Observable<any> {
  //   if (err.status === 401 || err.status === 403) { //
  //     //navigate /delete cookies or whatever
  //     this.router.navigateByUrl(`/login`);
  //     // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
  //     return of(err.message); // or EMPTY may be appropriate here
  //   }
  //   return throwError(err);
  // }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401 || err.status === 403) { //
          //navigate /delete cookies or whatever
          this.router.navigateByUrl(`/login`);
          // if you've caught / handled the error, you don't want to rethrow it unless you also want downstream consumers to have to handle it as well.
          return of(err.message); // or EMPTY may be appropriate here
        }
        return throwError(err);
      })
    )
  }
}
