import client from '../../shared/client';
import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../constants';

export const doLogin = (email = null, password = null) => {
  return async (dispatch) => {
    dispatch({
      type: LOGIN_LOADING,
    });

    try {
      if (!email || !password) {
        throw new Error('All field are required');
      }

      const body = {email, password};

      const loginResponse = await client.post('/account/login', body);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: loginResponse.data.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILED,
        payload: error.response?.data?.message ?? error.message,
      });
    }
  };
};

export const doLogout = () => {
  return async (dispatch) => {
    dispatch({
      type: LOGOUT_LOADING,
    });

    try {
      dispatch({
        type: LOGOUT_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: LOGOUT_FAILED,
        payload: error.response?.data?.message ?? error.message,
      });
    }
  };
};
