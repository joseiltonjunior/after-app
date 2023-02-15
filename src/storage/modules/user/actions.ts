import IUserState from './types';

export function setUser(user: IUserState) {
  return {
    type: '@user/SET_USER',
    payload: {
      user,
    },
  };
}
