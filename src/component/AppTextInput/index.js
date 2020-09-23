import * as React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import colors from '../../shared/colors';

export const AppTextInput = ({
  label = null,
  mode = 'contained',
  returnKeyLabel = 'Next',
  returnKeyType = 'next',
  onBlur = undefined,
  value = null,
  onChangeText = null,
  onFocus = null,
  error = false,
  errorText = '',
  autoCapitalize = '',
  placeholder = '',
  disabled = false,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={[styles.baseText]}>{label}</Text>
      <TextInput
        style={[styles.base, error && styles.baseError]}
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
      />
      {error && <Text style={[styles.errorText]}>{errorText}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 46 + 10 + 46,
    padding: 5,
  },
  baseError: {
    borderWidth: 0.7,
    borderColor: colors.red,
  },
  base: {
    height: 46,
    backgroundColor: colors.white,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: colors.grey,
  },
  baseText: {},
  errorText: {
    fontSize: 13,
    color: colors.red,
  },
});
