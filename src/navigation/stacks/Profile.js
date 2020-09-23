import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Profile from './../../screens/Profile';

import {screenNames} from '../../shared/screen';
import {NavHeaderAuthenticated} from '../../component';
import colors from '../../shared/colors';

const Stack = createStackNavigator();
export const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: NavHeaderAuthenticated,
      }}>
      <Stack.Screen
        component={Profile}
        name={screenNames.Profile}
        options={{title: 'Profile'}}
        initialParams={{
          headerBackground: colors.orange,
          headerColor: colors.white,
          headerIcon: 'account-circle',
          headerRight: 'logout',
        }}
      />
    </Stack.Navigator>
  );
};
