import { Reducer } from 'redux';
import IUserState from './types';

const INITIAL_STATE: IUserState = {
  id: 1,
  name: '',
  email: '',
  password: '',
  phone_number: '',
  pic: '',
};

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@user/SET_USER': {
      const { user } = action.payload;

      return (state = user);
    }
    default: {
      return state;
    }
  }
};

export default user;
