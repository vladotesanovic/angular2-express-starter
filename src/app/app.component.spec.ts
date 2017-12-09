/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

let component:  AppComponent;
let fixture:    ComponentFixture<AppComponent>;

describe('App: Tmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:        [HttpClientModule, RouterTestingModule, StoreModule.forRoot({}), SharedModule],
      declarations:   [AppComponent],
      providers:      [],

      schemas:        [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture     = TestBed.createComponent(AppComponent);
    component   = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
