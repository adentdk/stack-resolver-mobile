import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Profile from './../../screens/Profile';

import {screenNames} from '../../shared/screen';

const Stack = createStackNavigator();
export const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name={screenNames.Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};
