import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { CourceDetailComponent } from './cource-detail/cource-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListComponent } from './list/list.component';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    CourseComponent,
    CourceDetailComponent,
    CheckoutComponent,
    ListComponent,
    AcknowledgementComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    CoreModule
  ]
})
export class CourseModule { }
