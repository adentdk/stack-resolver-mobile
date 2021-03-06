import * as React from 'react';
import moment from 'moment';
import {StyleSheet, Text, View} from 'react-native';
import {AppBadge, AppBox, AppButton, AppDevider} from '../../../component';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const CardTopic = ({item, onPress}) => {
  const tags = Array.isArray(item) ? item.tags : JSON.parse(item.tags);
  return (
    <AppBox
      height={180}
      color={'#eeeeee'}
      paddingHorizontal={10}
      marginVertical={10}
      elevation={5}
      borderRadius={8}>
      <TouchableOpacity onPress={() => onPress(item)}>
        <View style={styles.row}>
          <CardHeaderRowItem count={item.commentCount} label={'Answers'} />
          <CardHeaderRowItem count={item.viewed} label={'Views'} />
        </View>
        <AppBox height={42}>
          <Text numberOfLines={2} style={styles.title}>
            {item.title}
          </Text>
        </AppBox>
        <AppDevider height={10} />
        <View style={styles.row}>
          {tags.map((tag, key) => {
            return <AppBadge key={key} text={tag} />;
          })}
        </View>
        <AppBox alignItems="flex-end">
          <Text>
            Created by <AppButton mode="link" title={item.createdBy} /> (
            {moment(item.created_at).format('HH:mm DD/MM/YYYY')})
          </Text>
        </AppBox>
      </TouchableOpacity>
    </AppBox>
  );
};

const CardHeaderRowItem = ({count, label}) => (
  <AppBox
    height={60}
    width={'auto'}
    flex={1}
    justifyContent="center"
    alignItems="center">
    <Text>{count}</Text>
    <Text>{label}</Text>
  </AppBox>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
