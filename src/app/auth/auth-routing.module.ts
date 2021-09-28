import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGardService } from '../core/auth-gard.service';
import { AuthComponent } from './auth.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGardService],
        data: { title: 'Login' }
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGardService],
        data: { title: 'Register' }
      },
      {
        path: 'forget',
        component: ForgetPasswordComponent,
        canActivate: [AuthGardService],
        data: { title: 'Forget Password' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
