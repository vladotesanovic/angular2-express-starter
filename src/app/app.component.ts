import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Store } from '@ngrx/store';
import { IAppState } from './store';
import { USER_GET } from './store/profile/profile.actions';
import { ISimpleResponse } from './shared/interfaces/simple.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  observable$: Observable<ISimpleResponse>;

  constructor(private http: HttpClient, private store: Store<IAppState>) {}

  ngOnInit() {

    this.observable$ = this.http.get<ISimpleResponse>('/api/public/simple');

    this.store.dispatch({
      type: USER_GET
    });
  }
}
