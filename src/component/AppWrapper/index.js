import * as React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import colors from '../../shared/colors';

export const AppWrapper = ({bgColor, children, scrollable = false}) => {
  return (
    <SafeAreaView>
      {scrollable ? (
        <ScrollView style={[styles.appWrapper, {backgroundColor: bgColor}]}>
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.appWrapper, {backgroundColor: bgColor}]}>
          {children}
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    backgroundColor: colors.white,
  },
});
