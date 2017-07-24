import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { routes } from './profile.router';
import { EditComponent } from './edit/edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
