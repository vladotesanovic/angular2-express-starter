import { NgModule } from '@angular/core';

import { ModalComponent, ModalDirectivesDirective } from './modal/modal.component';
import { CommonModule } from '@angular/common';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RouterModule } from '@angular/router';
import { SubNavigationComponent } from './sub-navigation/sub-navigation.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    ModalComponent,
    TopNavigationComponent,
    SubNavigationComponent,
    ModalDirectivesDirective,
    NotesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ModalComponent,
    ModalDirectivesDirective,
    TopNavigationComponent,
    SubNavigationComponent,
    NotesComponent
  ]
})
export class SharedModule {}
