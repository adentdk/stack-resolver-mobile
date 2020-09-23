import {combineReducers} from 'redux';
import {authReducer} from './reducers/authReducer';

const appReducer = {
  auth: authReducer,
};

export default combineReducers(appReducer);
