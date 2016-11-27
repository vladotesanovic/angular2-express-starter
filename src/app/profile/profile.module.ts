import { NgModule } from '@angular/core';

import { ProfileComponent } from './profile.component';
import { CommonModule } from '@angular/common';
import { routing } from './profile.routing';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    EditComponent
  ],
  bootstrap: [
    ProfileComponent
  ]
})
export class ProfileModule {}
