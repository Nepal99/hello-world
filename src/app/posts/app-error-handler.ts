import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler{
    handleError(error){
        alert('An unexpected error occurred during the post method');
        console.log(error);
    }
}