import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGardService } from '../core/auth-gard.service';
import { CourseWrapperComponent } from './course-wrapper/course-wrapper.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full' },
      {
        path: 'index',
        component: CourseWrapperComponent,
        canActivate: [AuthGardService],
        data: { title: 'Dashboard' }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
