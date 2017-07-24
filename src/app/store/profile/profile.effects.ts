import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { USER_GET, UserGet, UserGetFail, UserGetSuccess } from './profile.actions';

@Injectable()
export class ProfileEffects {

  @Effect()
  userGet$ = this.actions$
    .ofType(USER_GET)
    .switchMap((action: UserGet) => {

      return this.http.get('/api/user', action.payload)
        .map((response: Response) => response.json())
        .catch((error) => Observable.of(new UserGetFail(error)))
        .map((response) => new UserGetSuccess(response));
    });

  constructor(private actions$: Actions, private http: Http) {}
}
