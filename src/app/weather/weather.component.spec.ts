/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WeatherComponent } from './weather.component';
import { LoaderComponent } from '../shared/loader/loader.component';
import { AirQualityComponent } from './air/air.component';
import { ForecastComponent } from './forecast/forecast.component';
import { CityComponent } from './city/city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotesComponent } from '../shared/notes/notes.component';
import { InputComponent } from '../shared/input/input.component';
import { ButtonComponent } from '../shared/button/button.component';
import { CardComponent } from '../shared/card/card.component';
import { StoreModule } from '@ngrx/store';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WeatherComponent,
        LoaderComponent,
        AirQualityComponent,
        ForecastComponent,
        CardComponent,
        NotesComponent,
        ButtonComponent,
        CityComponent,
        InputComponent
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({}),
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
