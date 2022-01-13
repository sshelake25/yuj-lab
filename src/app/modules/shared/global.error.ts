import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler } from "@angular/core";

export class GlobalErrorHandler implements ErrorHandler {

    handleError(error: any) {


        // Check if it's an error from an HTTP response
        if (error instanceof HttpErrorResponse) {
           
            console.error('Error from global error handler', error);
        }



    }
}

