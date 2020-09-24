import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../shared/colors';
import {AppBox} from '../AppBox';

export const NavHeaderAuthenticated = (props) => {
  const {scene, previous, navigation} = props;
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;

  const backgroundColor = scene.route.params?.headerBackground ?? colors.white;
  const color = scene.route.params?.headerColor ?? colors.black;
  const icon = scene.route.params?.headerIcon ?? 'animation';
  const right = scene.route.params?.headerRight ?? undefined;

  const onLogout = scene.route.params?.onLogout ?? undefined;

  return (
    <View style={[styles.base, {backgroundColor}]}>
      {previous ? (
        <AppBox justifyContent="center" height={64} width={64}>
          <Icon.Button
            onPress={navigation.goBack}
            backgroundColor={colors.transparent}
            name="chevron-left"
            size={36}
            color={color}
          />
        </AppBox>
      ) : (
        <AppBox justifyContent="center" height={64} width={64}>
          <Icon.Button
            backgroundColor={colors.transparent}
            name={icon}
            size={36}
            color={color}
          />
        </AppBox>
      )}
      <AppBox flex={1}>
        <Text style={[styles.baseTitle, {color}]}>{title}</Text>
      </AppBox>
      {right !== undefined && (
        <AppBox justifyContent="center" height={64} width={64}>
          <Icon.Button
            onPress={onLogout}
            backgroundColor={colors.transparent}
            name={'logout-variant'}
            size={36}
            color={color}
          />
        </AppBox>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
  },
  baseTitle: {
    fontSize: 20,
    fontWeight: '700',
    textAlignVertical: 'center',
    lineHeight: 64,
  },
});
