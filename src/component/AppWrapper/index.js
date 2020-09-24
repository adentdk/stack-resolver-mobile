import * as React from 'react';

import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import colors from '../../shared/colors';

export const AppWrapper = React.memo(
  ({
    bgColor = colors.white,
    children,
    scrollable = false,
    flex = undefined,
  }) => {
    return (
      <SafeAreaView>
        {scrollable ? (
          <ScrollView
            style={[
              styles.appWrapper,
              {backgroundColor: bgColor},
              flex !== undefined ? {flex} : {},
            ]}
            children={children}
          />
        ) : (
          <View
            style={[styles.appWrapper, {backgroundColor: bgColor}]}
            children={children}
          />
        )}
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  appWrapper: {
    backgroundColor: colors.white,
    height: '100%',
  },
});
