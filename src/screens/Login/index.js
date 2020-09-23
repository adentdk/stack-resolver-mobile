import { connect } from 'react-redux';
import {doLogin} from '../../redux/actions/auth';
import LoginScreen from './screen';

const mapStateToProps = (state) => {
  const authState = state.auth;
  return {
    loading: authState.loginLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (email, password) => dispatch(doLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
