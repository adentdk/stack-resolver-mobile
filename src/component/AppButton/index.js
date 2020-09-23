import * as React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import colors from '../../shared/colors';

export const AppButton = ({
  title = '',
  mode = 'contained',
  loading = false,
  onPress = undefined,
  onLongPress = undefined,
}) => {
  return (
    <TouchableOpacity
      style={[styles.base, mode === 'link' ? styles.link : styles.contained]}
      disabled={loading}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Text
        style={[
          styles.baseText,
          mode === 'link' ? styles.linkText : styles.containedText,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    height: 46,
    padding: 10,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contained: {
    backgroundColor: colors.orange,
  },
  link: {
    backgroundColor: 'transparent',
    height: 12,
    padding: 0,
    margin: 0,
    width: 'auto',
  },
  linkText: {
    color: colors.orange,
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  baseText: {
    fontSize: 16,
  },
  containedText: {
    color: colors.white,
  },
});
