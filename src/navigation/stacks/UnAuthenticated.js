import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './../../screens/Login';
import RegisterScreen from './../../screens/Register';
import {screenNames} from '../../shared/screen';
const Stack = createStackNavigator();

export const UnAuthenticatedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={LoginScreen} name={screenNames.Login} />
      <Stack.Screen component={RegisterScreen} name={screenNames.Register} />
    </Stack.Navigator>
  );
};
