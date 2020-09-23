import * as React from 'react';
import {AppDevider, AppWrapper} from '../../component';
import Header from './components/Header';
import FormProfile from './components/FormProfile';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';

const ProfileScreen = ({navigation, doLogout, logoutLoading}) => {
  const _onLogout = () => {
    Alert.alert('Confirm', 'Are you sure to logout?', [
      {
        text: 'No, Cancel',
      },
      {
        text: 'Yes, Sure',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('token');
            doLogout();
          } catch (error) {}
        },
      },
    ]);
  };

  React.useEffect(() => {
    navigation.setParams({
      onLogout: _onLogout,
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
