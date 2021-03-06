import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppBox} from '../../../component';
import {width} from '../../../shared/dimension';

const CommentBox = ({content, leftValue, leftLabel, footer}) => {
  return (
    <>
      <View style={styles.row}>
        <AppBox
          width={width / 6}
          height={'auto'}
          justifyContent="center"
          alignItems="center"
          borderRight={0.7}>
          <Text>{leftValue}</Text>
          <Text>{leftLabel}</Text>
        </AppBox>
        <AppBox
          paddingHorizontal={5}
          paddingVertical={20}
          flex={1}
          height={'auto'}
          justifyContent="center">
          <Text>{content}</Text>
          {footer !== undefined && (
            <View style={styles.row}>
              <AppBox height={10} alignItems="flex-end">
                <Text style={styles.footer}>{footer}</Text>
              </AppBox>
            </View>
          )}
        </AppBox>
      </View>
    </>
  );
};

export default CommentBox;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  footer: {
    fontSize: 12,
  },
});
