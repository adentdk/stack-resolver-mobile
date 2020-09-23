import { connect } from 'react-redux';
import {doLogout} from '../../redux/actions/auth';
import ProfileScreen from './screen';

const mapStateToProps = (state) => {
  const authState = state.auth;
  return {
    logoutLoading: authState.logoutLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => dispatch(doLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
