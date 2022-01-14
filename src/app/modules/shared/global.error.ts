import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";
import { DialogService } from "./services/dialog.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private yujDialog: DialogService) { }

    handleError(error: any) {
        
        // Check if it's an error from an HTTP response
        if (error instanceof HttpErrorResponse) {
            this.yujDialog.openErrorDialog("This is my custome error message", 900);
            console.error('Error from global error handler', error);
        }
    }
}

