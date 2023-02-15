import { legacy_createStore as createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import IUserState from './modules/user/types';

export interface IState {
  user: IUserState;
}

const store = createStore(rootReducer);

export default store;
