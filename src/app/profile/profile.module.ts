import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ProfileComponent
  ],
  bootstrap: [
    ProfileComponent
  ]
})
export class ProfileModule {}
