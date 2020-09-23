import * as React from 'react';
import {AppDevider, AppWrapper} from '../../component';
import Header from './components/Header';
import FormProfile from './components/FormProfile';

const ProfileScreen = ({navigation, doLogout, logoutLoading}) => {
  React.useEffect(() => {
    navigation.setParams({
      onLogout: doLogout,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppWrapper scrollable={true}>
      <Header />
      <AppDevider height={40} />
      <FormProfile />
    </AppWrapper>
  );
};

export default ProfileScreen;
