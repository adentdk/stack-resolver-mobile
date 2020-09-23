import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

const appMiddlewares = [];

appMiddlewares.push(thunk);
appMiddlewares.push(promise);

if (__DEV__) {
  appMiddlewares.push(createLogger());
}

export default appMiddlewares;
