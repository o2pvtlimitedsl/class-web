import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGardService } from './auth-gard.service';
import { ResponseManagerService } from './response-manager.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './api-interceptor';
import { SecureHttpService } from './secure-http.service';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers:[
    AuthGardService,
    ResponseManagerService,
    SecureHttpService,
    {provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true}
  ]
})
export class CoreModule { }
