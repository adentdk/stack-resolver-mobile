import * as React from 'react';
import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {AppWrapper} from '../../component';
import {screenNames} from '../../shared/screen';
import FormCreateTopic from './components/FormCreateTopic';

const NewCommentScreen = ({
  route,
  navigation,
  createLoading,
  createSuccess,
  createFailed,
  doCreateComment,
  createCommentSetDefault,
  message,
  error,
}) => {
  const topic = route?.params?.topic;
  const _onSubmit = (data) => doCreateComment(data, topic.id);

  React.useEffect(() => {
    if (createFailed) {
      Alert.alert('Failed', error);
    }
    if (createSuccess) {
      createCommentSetDefault();
      Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_INDEFINITE,
      });

      setTimeout(() => {
        Snackbar.dismiss();
        navigation.navigate(screenNames.TopicDetail, {
          topic,
          reload: true,
        });
      }, Snackbar.LENGTH_SHORT);
    }
  }, [
    createFailed,
    createSuccess,
    createCommentSetDefault,
    error,
    message,
    navigation,
    topic,
  ]);

  return (
    <AppWrapper>
      <FormCreateTopic
        onSubmit={_onSubmit}
        loading={createLoading || createSuccess}
      />
    </AppWrapper>
  );
};

export default NewCommentScreen;
