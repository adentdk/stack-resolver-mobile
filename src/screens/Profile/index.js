import {connect} from 'react-redux';
import {doGetProfile, doLogout} from '../../redux/actions/auth';
import ProfileScreen from './screen';

const mapStateToProps = (state) => {
  const authState = state.auth;
  return {
    logoutLoading: authState.logoutLoading,
    profileLoading: authState.getProfileLoading,
    auth: authState.auth,
    user: authState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogout: () => dispatch(doLogout()),
    doGetProfile: () => dispatch(doGetProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
