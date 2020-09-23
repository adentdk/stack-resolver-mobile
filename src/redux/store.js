import {applyMiddleware, createStore, compose} from 'redux';

import appReducer from './combineReducers';
import appMiddleware from './middlewares';

const store = compose(applyMiddleware(...appMiddleware))(createStore)(
  appReducer,
);

export default store;
