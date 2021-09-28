import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpHeaderService implements HttpInterceptor {

  constructor() { }

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const API_KEY = '123456';
    return next.handle(httpRequest.clone({ setHeaders: { API_KEY } }));
  }
}
