import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UnAuthenticatedStack} from './stacks/UnAuthenticated';

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <UnAuthenticatedStack />
    </NavigationContainer>
  );
};

export default AppNavigation;
