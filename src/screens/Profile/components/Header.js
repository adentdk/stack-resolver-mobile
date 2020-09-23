import * as React from 'react';
import {StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AppBox} from '../../../component';
import colors from '../../../shared/colors';
import * as dimension from './../../../shared/dimension';

const Header = () => {
  return (
    <AppBox
      height={dimension.height / 3}
      color={colors.orange}
      justifyContent="center"
      alignItems="center">
      <Icon name="account-circle" size={120} color={colors.white} />
      <Text style={styles.textName}>{'Aden Trisna Daud Kurnia'}</Text>
    </AppBox>
  );
};

export default Header;

const styles = StyleSheet.create({
  textName: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
  },
});
