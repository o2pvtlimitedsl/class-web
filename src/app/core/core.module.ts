import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGardService } from './auth-gard.service';
import { ResponseManagerService } from './response-manager.service';
import { SecureHttpService } from './secure-http.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthGardService,
    ResponseManagerService,
    SecureHttpService
  ]
})
export class CoreModule { }
