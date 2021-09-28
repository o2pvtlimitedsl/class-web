import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGardService } from '../core/auth-gard.service';
import { AcknowledgementComponent } from './acknowledgement/acknowledgement.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CourceDetailComponent } from './cource-detail/cource-detail.component';
import { CourseComponent } from './course.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [{
  path: '',
  component: CourseComponent,
  children: [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
      path: 'list',
      component: ListComponent,
      canActivate: [AuthGardService],
      data: { title: 'Course List' }
    },
    {
      path: 'detail',
      component: CourceDetailComponent,
      canActivate: [AuthGardService],
      data: { title: 'Course Detail' }
    },
    {
      path: 'checkout',
      component: CheckoutComponent,
      canActivate: [AuthGardService],
      data: { title: 'Checkout' }
    },
    {
      path: 'acknowledgement',
      component: AcknowledgementComponent,
      canActivate: [AuthGardService],
      data: { title: 'Status' }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
