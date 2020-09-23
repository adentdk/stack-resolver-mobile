import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';
import * as dimension from './../../shared/dimension';
export const NavHeaderUnAuthenticated = (props) => {
  return (
    <View style={[styles.wrapper]}>
      <Icon name="animation" color={colors.white} size={92} />
      <Text style={[styles.text]}>Stack Resolver</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: dimension.height / 3,
    backgroundColor: colors.orange,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});
