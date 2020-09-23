import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../../screens/Home';
import TopicDetailScreen from './../../screens/TopicDetail';
import {screenNames} from '../../shared/screen';
import {NavHeaderAuthenticated} from '../../component';

const Stack = createStackNavigator();
export const TopicStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: NavHeaderAuthenticated,
      }}>
      <Stack.Screen
        component={HomeScreen}
        name={screenNames.Topic}
        options={{
          title: 'Topic',
        }}
      />
      <Stack.Screen
        component={TopicDetailScreen}
        name={screenNames.TopicDetail}
      />
    </Stack.Navigator>
  );
};
