import {combineReducers} from 'redux';
import {authReducer} from './reducers/authReducer';
import {topicReducer} from './reducers/topicReducer';

const appReducer = {
  auth: authReducer,
  topic: topicReducer,
};

export default combineReducers(appReducer);
