import * as React from 'react';
import {Button, Text, View} from 'react-native';
import {AppWrapper} from '../../component';

const RegisterScreen = () => {
  return (
    <AppWrapper>
      <View>
        <Text>Register</Text>
      </View>
      <Button title="Login" />
    </AppWrapper>
  );
};

export default RegisterScreen;
