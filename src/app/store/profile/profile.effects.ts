import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { USER_GET, UserGet, UserGetFail, UserGetSuccess } from './profile.actions';

@Injectable()
export class ProfileEffects {

  @Effect()
  userGet$ = this.actions$
    .ofType(USER_GET)
    .switchMap((action: UserGet) => {

      return this.http.get<any>('/api/user')
        .catch((error) => Observable.of(new UserGetFail(error)))
        .map((response: any) => new UserGetSuccess(response));
    });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
