import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalErrorHandler } from './global.error';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { LoadingDialogComponent } from './loading-dialog/loading-dialog.component';
import { MaterialModule } from 'src/app/meterial.modules';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpLoadingInterceptor } from './intercepts/http-loading.interceptor';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    LoadingDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: HttpLoadingInterceptor, multi:true }
  ]
})
export class SharedModule { }
