import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';
import { routing } from './dashboard.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [
    DashboardComponent
  ],
  bootstrap: [
    DashboardComponent
  ]
})
export class DashboardModule {}
