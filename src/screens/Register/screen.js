import * as React from 'react';
import {Alert, StyleSheet, Text} from 'react-native';
import {AppButton, AppDevider, AppLoading, AppWrapper} from '../../component';
import {screenNames} from '../../shared/screen';

import FormRegister from './components/FormRegister';

const RegisterScreen = ({
  navigation,
  loading,
  success,
  failed,
  error,
  message,
  doRegister,
}) => {
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

  const _onSubmit = ({name, email, password}) => {
    doRegister({name, email, password});
  };

  const _onLoginPressed = React.useCallback(() => {
    navigation.navigate(screenNames.Login);
  }, [navigation]);

  React.useEffect(() => {
    if (failed) {
      Alert.alert('Failed', error);
    } else if (success) {
      Alert.alert('Success', message, [
        {
          text: 'Ok, Login',
          onPress: _onLoginPressed,
        },
      ]);
    }
  }, [failed, error, success, message, _onLoginPressed]);

  return (
    <>
      <AppLoading visible={loading} />
      <AppWrapper scrollable={true}>
        <AppDevider height={40} />
        <FormRegister
          onFocus={_onFocus}
          onBlur={_onBlur}
          loading={loading}
          onSubmit={_onSubmit}
        />
        <AppDevider flex={1} />
        <Text style={[styles.registerText]}>
          Already have an account?{' '}
          <AppButton mode="link" title={'Login'} onPress={_onLoginPressed} />
        </Text>
      </AppWrapper>
    </>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  registerText: {
    textAlign: 'center',
  },
});
