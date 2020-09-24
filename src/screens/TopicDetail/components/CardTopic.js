import * as React from 'react';
import moment from 'moment';
import {StyleSheet, Text, View} from 'react-native';
import {AppBadge, AppBox, AppButton, AppDevider} from '../../../component';
import colors from '../../../shared/colors';
import {width} from '../../../shared/dimension';
import CommentBox from './CommentBox';

const CardTopic = ({topic}) => {
  const tags = JSON.parse(topic.tags);
  return (
    <AppBox height={'auto'}>
      <AppBox height={'auto'} borderHorizontal={0.7}>
        <View style={styles.row}>
          <AppBox
            paddingHorizontal={5}
            flex={1}
            height={'auto'}
            justifyContent="center">
            <Text style={styles.title}>{topic.title}</Text>
            <View style={styles.row}>
              {tags.map((tag, key) => {
                return <AppBadge key={key} text={tag} />;
              })}
            </View>
            <AppBox alignItems="flex-end">
              <Text>{moment(topic.created_at).format('HH:mm DD/MM/YYYY')}</Text>
              <Text>
                Created by <AppButton mode="link" title={topic.createdBy} />
              </Text>
            </AppBox>
          </AppBox>
        </View>
      </AppBox>
      <AppDevider height={20} />
      <CommentBox
        leftValue={topic.viewed}
        leftLabel={'Views'}
        content={topic.description}
      />
    </AppBox>
  );
};

export default CardTopic;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: colors.blue,
    fontWeight: '800',
  },
  row: {
    flexDirection: 'row',
  },
});
