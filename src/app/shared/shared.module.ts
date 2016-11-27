import { NgModule } from '@angular/core';

import { ModalComponent, ModalDirectives } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from "./top-navigation/top-navigation.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    ModalComponent,
    TopNavigationComponent,
    ModalDirectives
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ModalComponent,
    ModalDirectives,
    TopNavigationComponent
  ]
})
export class SharedModule {}
