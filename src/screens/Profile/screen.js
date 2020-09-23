import * as React from 'react';
import {AppWrapper} from '../../component';
import Header from './components/Header';
import FormProfile from './components/FormProfile';

const ProfileScreen = () => {
  return (
    <AppWrapper scrollable={true}>
      <Header />
      <FormProfile />
    </AppWrapper>
  );
};

export default ProfileScreen;
