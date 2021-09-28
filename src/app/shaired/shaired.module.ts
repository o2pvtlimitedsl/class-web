import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    BurgerMenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShairedModule { }
