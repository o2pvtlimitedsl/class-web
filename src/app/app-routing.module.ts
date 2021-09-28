import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CourseComponent } from './course/course.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent,
    children: [{
      path: '',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    }]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [{
      path: '',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
    }]
  },
  {
    path: 'course',
    component: CourseComponent,
    children: [{
      path: '',
      loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
