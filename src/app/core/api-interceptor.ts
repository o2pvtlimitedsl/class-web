import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, mergeMap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from "./api-endpoints";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

    constructor(private http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler) {
        if (request.url.includes("login") || request.url.includes("signup"))
            return next.handle(request);

        let token: any = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : '';
        const headers = new HttpHeaders({
            'Authorization': token,
            'Content-Type': 'application/json'
        });
        const url = `${request.url}`;
        const newRequest = request.clone({ headers })
        return next.handle(newRequest).pipe(catchError(err => {
            debugger
            if (err instanceof HttpErrorResponse) {
                if (err.status === 400) {
                    // Handle unauthorized error
                    const body = { refreshToken: localStorage.getItem("refresh-token") };
                    return this.http.post(ApiEndpoints.REFRESH_TOKEN_URL, body)
                        .pipe(mergeMap((res: any) => {
                            localStorage.setItem("token", res['token']);
                            localStorage.setItem("refresh-token", res['refreshToken']);

                            // Making request with new token.
                            return next.handle(newRequest.clone(
                                { headers: newRequest.headers.set('Authorization', res['token']) }
                            ));
                        }), catchError(err => {
                            if (err instanceof HttpErrorResponse && err.status === 400) {
                                // Refresh Token is also expired
                                // So logout user
                                // logout()
                            }
                            return throwError(err);
                        }));
                }
                // ......
            }
            return new Observable<HttpEvent<any>>();
        }));
    }

}