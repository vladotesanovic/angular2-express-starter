import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { USER_GET, UserGet, UserGetFail, UserGetSuccess } from './profile.actions';
import { catchError, map } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class ProfileEffects {

  @Effect()
  userGet$ = this.actions$
    .ofType(USER_GET)
    .pipe(

      switchMap((action: UserGet) => {

        return this.http.get<any>('/api/user')
        .pipe(
          map((response: any) => new UserGetSuccess(response)),
          catchError((error) => of(new UserGetFail(error)))
        );
      })

    );



  constructor(private actions$: Actions, private http: HttpClient) {}
}
