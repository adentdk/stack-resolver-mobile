import * as React from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import {AppButton, AppDevider, AppLoading, AppWrapper} from '../../component';

import FormLogin from './components/FormLogin';

const LoginScreen = ({navigation, loading, failed, error, doLogin}) => {
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

  const _onSubmit = ({email, password}) => {
    doLogin(email, password);
  };

  React.useEffect(() => {
    if (failed) {
      Alert.alert('Failed', error);
    }
  }, [failed, error]);

  return (
    <>
      <AppLoading visible={loading} />
      <AppWrapper scrollable={true}>
        <AppDevider height={40} />
        <FormLogin
          onFocus={_onFocus}
          onBlur={_onBlur}
          loading={loading}
          onSubmit={_onSubmit}
        />
        <AppDevider flex={1} />
        <Text style={[styles.registerText]}>
          Don't have an account? <AppButton mode="link" title={'Register'} />
        </Text>
      </AppWrapper>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  registerText: {
    textAlign: 'center',
  },
});
