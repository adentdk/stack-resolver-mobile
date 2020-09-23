import * as React from 'react';
import {StyleSheet, View} from 'react-native';

export const AppDevider = ({
  height = 10,
  flex = undefined,
  borderWidth = 0,
  color = undefined,
}) => {
  return (
    <View
      style={[styles.base, {height, borderWidth, borderColor: color, flex}]}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: 'transparent',
  },
});
