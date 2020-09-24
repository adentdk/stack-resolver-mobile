import * as React from 'react';
import moment from 'moment';
import {StyleSheet, Text, View} from 'react-native';
import {AppBadge, AppBox, AppButton, AppDevider} from '../../../component';

export const CardTopic = ({item}) => {
  return (
    <AppBox
      height={180}
      color={'#eeeeee'}
      paddingHorizontal={10}
      marginVertical={10}
      elevation={5}
      borderRadius={8}>
      <View style={styles.row}>
        <CardHeaderRowItem count={20} label={'Answers'} />
        <CardHeaderRowItem count={item.viewed} label={'Views'} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <AppDevider height={10} />
      <View style={styles.row}>
        {item.tags.map((tag, key) => {
          return <AppBadge key={key} text={tag} />;
        })}
      </View>
      <AppBox alignItems="flex-end">
        <Text>{moment(item.createdAt).format('HH:mm DD/MM/YYYY')}</Text>
        <Text>
          Created by <AppButton mode="link" title={item.createdBy} />
        </Text>
      </AppBox>
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
