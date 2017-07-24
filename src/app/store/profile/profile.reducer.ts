import { Actions, USER_GET_SUCCESS } from './profile.actions';

export interface IProfile {
  name: string;
  username: string;
  email: string;
}

export function profileReducer(state: IProfile, action: Actions): IProfile {

  switch (action.type) {

    case USER_GET_SUCCESS:

      return Object.assign({}, action.payload);

    default:
      return state;
  }
}
