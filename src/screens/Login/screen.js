import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {AppWrapper} from '../../component';

const LoginScreen = () => {
  return (
    <AppWrapper>
      <View>
        <Text>Login</Text>
      </View>
      <Button title="Register" />
    </AppWrapper>
  );
};

export default LoginScreen;
