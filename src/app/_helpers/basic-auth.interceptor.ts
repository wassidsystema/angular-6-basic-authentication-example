import {throwError as observableThrowError,  Observable ,  BehaviorSubject } from 'rxjs';

import {take, filter, catchError, switchMap, finalize} from 'rxjs/operators';
import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";

import { AuthenticationService } from './../_services/authentication.service';
@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  
    isRefreshingToken: boolean = false;
    tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    constructor(private injector: Injector) {}

    addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
        
        return req.clone({ setHeaders: { 
            'Content-Type': 'application/json;charset=UTF-8', 
            Authorization: 'Bearer ' + token 
        }})
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        debugger
        if (currentUser && currentUser.authdata) {
        return next.handle(this.addToken(req, currentUser.authdata)).pipe(
            catchError(error => {
                if (error instanceof HttpErrorResponse) {
                    switch ((<HttpErrorResponse>error).status) {
                        default:
                            return observableThrowError(error);
                    }
                } else {
                    return observableThrowError(error);
                }
            }));
        } else {
            return next.handle(req);
        }
    }



    /*
        This method is only here so the example works.
        Do not include in your code, just use 'req' instead of 'this.getNewRequest(req)'.
    */
    getNewRequest(req: HttpRequest<any>): HttpRequest<any> {
        if (req.url.indexOf('getData') > 0) {
            return new HttpRequest('GET', 'http://private-4002d-testerrorresponses.apiary-mock.com/getData');
        }

        return new HttpRequest('GET', 'http://private-4002d-testerrorresponses.apiary-mock.com/getLookup');
    }

    logoutUser() {
        // Route to the login page (implementation up to you)

        return observableThrowError("");
    }
}