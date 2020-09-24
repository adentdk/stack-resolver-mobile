import * as React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../shared/colors';

export const AppTextInput = ({
  label = undefined,
  mode = 'contained',
  returnKeyLabel = 'Next',
  returnKeyType = 'next',
  onBlur = undefined,
  value = null,
  onChangeText = null,
  onFocus = null,
  error = false,
  errorText = '',
  autoCapitalize = 'none',
  placeholder = '',
  disabled = false,
  secureTextEntry = false,
  height = undefined,
  autoFocus = undefined,
}) => {
  return (
    <View
      style={[
        styles.wrapper,
        height && {
          height: label === undefined ? height + 46 : height + 10 + 46,
        },
      ]}>
      {label !== undefined && <Text style={[styles.baseText]}>{label}</Text>}
      <TextInput
        style={[styles.base, error && styles.baseError, {height}]}
        textAlignVertical="top"
        value={value}
        onFocus={onFocus}
        editable={!disabled}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        returnKeyLabel={returnKeyLabel}
        returnKeyType={returnKeyType}
        onBlur={onBlur}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoFocus={autoFocus}
      />
      {error && <Text style={[styles.errorText]}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 46 + 46,
    padding: 5,
  },
  baseError: {
    borderWidth: 0.7,
    borderColor: colors.red,
  },
  base: {
    height: 46,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 0.5,
    paddingHorizontal: 10,
    borderColor: colors.grey,
    fontSize: 17,
    fontWeight: '600',
  },
  baseText: {},
  errorText: {
    fontSize: 13,
    color: colors.red,
  },
});
