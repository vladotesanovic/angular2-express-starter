import { Action } from '@ngrx/store';
import { IProfile } from './profile.reducer';

export const USER_GET = '[Profile] get user';
export const USER_GET_SUCCESS = '[Profile] get user success';
export const USER_GET_FAIL = '[Profile] get user fail';

export class UserGet implements Action {
  readonly type = USER_GET;

  constructor(public payload: string) {}
}

export class UserGetSuccess implements Action {
  readonly type = USER_GET_SUCCESS;

  constructor(public payload: IProfile) {}
}

export class UserGetFail implements Action {
  readonly type = USER_GET_FAIL;

  constructor(public payload: string) {}
}

export type Actions =
  | UserGet
  | UserGetSuccess
  | UserGetFail;
