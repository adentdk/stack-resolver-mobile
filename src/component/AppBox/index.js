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
  marginVertical = undefined,
  marginHorizontal = undefined,
  paddingHorizontal = undefined,
  borderRadius = 0,
  elevation = undefined,
  borderHorizontal = undefined,
  paddingVertical = undefined,
  borderRight = undefined,
}) => {
  return (
    <View
      style={[
        styles.base,
        {
          height,
          width,
          marginVertical,
          marginHorizontal,
          paddingHorizontal,
          paddingVertical,
          borderRadius,
          flex,
          backgroundColor: color,
          elevation,
          justifyContent,
          alignItems,
          borderRightWidth: borderRight,
        },

        borderHorizontal !== undefined && {
          borderTopWidth: borderHorizontal,
          borderBottomWidth: borderHorizontal,
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
