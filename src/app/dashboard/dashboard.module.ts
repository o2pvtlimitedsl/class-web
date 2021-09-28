import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CourseWrapperComponent } from './course-wrapper/course-wrapper.component';
import { CourseComponent } from './course/course.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    DashboardComponent,
    CourseWrapperComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule
  ]
})
export class DashboardModule { }
