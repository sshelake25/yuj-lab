import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { DialogService } from '../services/dialog.service';

@Injectable()
export class HttpLoadingInterceptor implements HttpInterceptor {

  constructor(private yujLoading: DialogService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    let showLoaderAips = ["api/user", "api/customer"];

    //if(showLoaderAips.includes(request.path)) {
    this.yujLoading.openLoadingDialog();
    //}

    return next.handle(request).pipe(
      finalize(() => {

        this.yujLoading.hideLoadingDialog();
      })
    ) as Observable<HttpEvent<any>>;
  }
}
