/* tslint:disable:no-unused-variable */

import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

let component:  AppComponent;
let fixture:    ComponentFixture<AppComponent>;

describe('App: Tmp', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:        [HttpModule, RouterTestingModule],
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

  it(`should have as title 'app works!'`, () => {
    expect(component.title).toEqual('app works!');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  });
});
