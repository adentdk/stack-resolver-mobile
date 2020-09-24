import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TopicList = ({data}) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Number of Topics (43)</Text>
    </View>
  );
};

export default TopicList;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: '200',
    fontSize: 20,
  },
});
