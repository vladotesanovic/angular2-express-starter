import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { USER_GET, USER_GET_FAIL, USER_GET_SUCCESS } from './profile.actions';

@Injectable()
export class ProfileEffects {

  @Effect()
  userGet$ = this.actions$
    .ofType(USER_GET)
    .switchMap((action: Action) => {

      return this.http.get('/api/user', action.payload)
        .map((response: Response) => response.json())
        .catch(() => Observable.of(({ type: USER_GET_FAIL })))
        .map((response) => ({type: USER_GET_SUCCESS, payload: response}));

    });

  constructor(private actions$: Actions, private http: Http) {}
}
