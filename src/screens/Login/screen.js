import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {AppButton, AppDevider, AppWrapper} from '../../component';

import FormLogin from './components/FormLogin';

const LoginScreen = ({navigation}) => {
  const _onFocus = () => {
    navigation.setParams({
      headerMode: 'small',
    });
  };

  const _onBlur = () => {
    navigation.setParams({
      headerMode: 'normal',
    });
  };
  return (
    <AppWrapper scrollable={true}>
      <AppDevider height={40} />
      <FormLogin onFocus={_onFocus} onBlur={_onBlur} />
      <AppDevider flex={1} />
      <Text style={[styles.registerText]}>
        Don't have an account? <AppButton mode="link" title={'Register'} />
      </Text>
    </AppWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  registerText: {
    textAlign: 'center',
  },
});
