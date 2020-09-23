import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../shared/colors';

export const AppBox = ({
  height = 20,
  width = '100%',
  flex = undefined,
  color = undefined,
  children = null,
  justifyContent = undefined,
  alignItems = undefined,
}) => {
  return (
    <View
      style={[
        styles.base,
        {
          height,
          width,
          flex,
          backgroundColor: color,
          justifyContent,
          alignItems,
        },
      ]}
      children={children}
    />
  );
};

const styles = StyleSheet.create({
  base: {
    backgroundColor: colors.orange,
  },
});
