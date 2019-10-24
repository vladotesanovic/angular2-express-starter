import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { USER_GET, UserGet, UserGetFail, UserGetSuccess } from './profile.actions';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/internal/operators';

@Injectable()
export class ProfileEffects {

  @Effect()
  userGet$ = this.actions$.pipe(
    ofType(USER_GET),
    switchMap((action: UserGet) => {
      return this.http.get<any>('/api/user')
      .pipe(
        map((response: any) => new UserGetSuccess(response)),
        catchError((error) => of(new UserGetFail(error)))
      );
    })
  );

  constructor (private actions$: Actions, private http: HttpClient) {}
}
