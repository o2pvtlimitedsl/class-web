import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { HeaderComponent } from './header/header.component';
import { CommonHeaderComponent } from './common-header/common-header.component';
import { AngularMaterialModule } from '../core/angular-material.module';



@NgModule({
  declarations: [
    BurgerMenuComponent,
    HeaderComponent,
    CommonHeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class ShairedModule { }
