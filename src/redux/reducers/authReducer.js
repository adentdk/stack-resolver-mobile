import {
  LOGIN_FAILED,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT_LOADING,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from '../constants';

const initialState = {
  loginLoading: false,
  loginSuccess: false,
  loginFailed: false,
  logoutLoading: false,
  logoutSuccess: false,
  logoutFailed: false,
  auth: {
    email: '',
    token: null,
  },
  user: {
    display_name: '',
    full_name: '',
  },
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
        loginError: false,
      };
    case LOGIN_SUCCESS:
      const {payload} = action;
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        auth: {
          ...state.auth,
          token: payload,
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginFailed: true,
        error: payload,
      };
    case LOGOUT_LOADING:
      return {
        ...state,
        loginLoading: true,
        loginSuccess: false,
        loginError: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        auth: {
          ...state.auth,
          token: null,
        },
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginFailed: true,
        error: payload,
      };
    default:
      return state;
  }
};
