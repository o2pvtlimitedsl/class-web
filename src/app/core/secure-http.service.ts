import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { STDResponse } from './response';

@Injectable({
  providedIn: 'root'
})
export class SecureHttpService {

  constructor(private httpClient: HttpClient) { }

  private createHeaders(headers?: Headers): HttpHeaders {
    let requestHeaders: any = {};
    requestHeaders['Content-Type'] = 'application/json';
    if (headers) {
      requestHeaders = Object.assign({}, requestHeaders, headers);
    }
    const httpHeaders = new HttpHeaders(requestHeaders);
    return httpHeaders;
  }

  private authHeader(headers?: Headers): HttpHeaders {
    const authToken = sessionStorage.getItem('auth_token');
    if (authToken) {
      const headersAppend = Object.assign({}, { 'X-Authorization': 'Bearer ' + authToken }, headers);
      return this.createHeaders(headersAppend);
    } else {
      const headersAppend = Object.assign({}, headers);
      return this.createHeaders(headersAppend);
    }
  }

  public get(url: string, skipLoader?: boolean) {
    return this.httpClient.get(url).pipe(
      map((m: any) => {
        const res = new STDResponse({ data: m.data, meta: m.meta, status: true })
        return res;
      }),
      catchError(this.handleError('post'))
    )
  }

  public post(url: string, body: any, skipLoader?: boolean) {
    return this.httpClient.post(url, body).pipe(
      map((m: any) => {
        const res = new STDResponse({ data: m.data, meta: m.meta, status: true })
        return res;
      }),
      catchError(this.handleError('post'))
    )
  }

  public put(url: string, body: any, skipLoader?: boolean) {
    return this.httpClient.put(url, body).pipe(
      map((m: any) => {
        const res = new STDResponse({ data: m.data, meta: m.meta, status: true })
        return res;
      }),
      catchError(this.handleError('post'))
    )
  }

  public delete(url: string, body: any, skipLoader?: boolean) {
    return this.httpClient.delete(url, body).pipe(
      map((m: any) => {
        const res = new STDResponse({ data: m.data, meta: m.meta, status: true })
        return res;
      }),
      catchError(this.handleError('post'))
    )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      (`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
