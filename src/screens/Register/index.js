import {connect} from 'react-redux';
import {doRegister} from '../../redux/actions/auth';
import RegisterScreen from './screen';

const mapStateToProps = (state) => {
  const authState = state.auth;
  return {
    loading: authState.registerLoading,
    success: authState.registerSuccess,
    failed: authState.registerFailed,
    error: authState.error,
    message: authState.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doRegister: ({name, email, password}) =>
      dispatch(doRegister({name, email, password})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen);
