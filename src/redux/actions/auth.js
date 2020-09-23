import client from '../../shared/client';
import {LOGIN_FAILED, LOGIN_LOADING, LOGIN_SUCCESS} from '../constants';

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
