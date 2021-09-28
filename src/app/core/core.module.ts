import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGardService } from './auth-gard.service';
import { ResponseManagerService } from './response-manager.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    AuthGardService,
    ResponseManagerService
  ]
})
export class CoreModule { }
