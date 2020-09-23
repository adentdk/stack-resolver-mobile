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
        loginFailed: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginLoading: false,
        loginSuccess: true,
        auth: {
          ...state.auth,
          token: action.payload,
        },
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loginLoading: false,
        loginFailed: true,
        error: action.payload,
      };
    case LOGOUT_LOADING:
      return {
        ...state,
        logoutLoading: true,
        logoutSuccess: false,
        logoutFailed: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        logoutLoading: false,
        logoutSuccess: true,
        auth: {
          ...state.auth,
          token: null,
        },
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        logoutLoading: false,
        logoutFailed: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
