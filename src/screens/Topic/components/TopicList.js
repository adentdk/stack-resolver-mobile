import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {AppBox, AppDevider} from '../../../component';
import {keyExtractor} from '../../../shared/virtualList';
import {CardTopic} from './CardTopic';

const TopicList = ({rows, pagination, onItemPress}) => {
  const renderItem = ({item, index}) => {
    return <CardTopic item={item} key={index} onPress={onItemPress} />;
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        Number of Topics ({pagination.numberOfRows})
      </Text>
      <AppDevider height={20} />
      {rows.map((row, index) => renderItem({item: row, index}))}
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
