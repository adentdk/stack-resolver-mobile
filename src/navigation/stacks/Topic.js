import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from './../../screens/Home';
import TopicDetailScreen from './../../screens/TopicDetail';
import {screenNames} from '../../shared/screen';

const Stack = createStackNavigator();
export const TopicStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name={screenNames.Topic} />
      <Stack.Screen
        component={TopicDetailScreen}
        name={screenNames.TopicDetail}
      />
    </Stack.Navigator>
  );
};
