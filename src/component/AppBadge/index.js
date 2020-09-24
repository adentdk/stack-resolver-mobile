import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../shared/colors';

export const AppBadge = ({
  color = colors.orange,
  labelColor = colors.white,
  text,
}) => (
  <View style={[styles.base, {backgroundColor: color}]}>
    <Text style={[styles.text, {color: labelColor}]}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  base: {
    height: 25,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 8,
  },
  text: {
    fontSize: 14,
    textAlignVertical: 'center',
  },
});
