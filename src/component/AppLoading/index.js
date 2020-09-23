import * as React from 'react';
import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import colors from '../../shared/colors';
import {height} from '../../shared/dimension';
import {AppBox} from '../AppBox';

export const AppLoading = ({visible = true}) => {
  if (visible) {
    return (
      <Modal transparent={true} visible={visible}>
        <View style={styles.wrapper}>
          <AppBox justifyContent="center" alignItems="center" height={height}>
            <ActivityIndicator size={46} color={colors.orange} />
          </AppBox>
        </View>
      </Modal>
    );
  } else {
    return <View />;
  }
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: colors.transparentBlack,
  },
});
