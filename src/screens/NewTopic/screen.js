import * as React from 'react';
import {Alert} from 'react-native';
import Snackbar from 'react-native-snackbar';
import {AppWrapper} from '../../component';
import {screenNames} from '../../shared/screen';
import FormCreateTopic from './components/FormCreateTopic';

const NewTopicScreen = ({
  navigation,
  createLoading,
  createSuccess,
  createFailed,
  doCreateTopic,
  createTopicSetDefault,
  message,
  error,
}) => {
  const _onSubmit = (data) => doCreateTopic(data);

  React.useEffect(() => {
    if (createFailed) {
      Alert.alert('Failes', error);
    }
    if (createSuccess) {
      createTopicSetDefault();
      Snackbar.show({
        text: message,
        duration: Snackbar.LENGTH_INDEFINITE,
      });

      setTimeout(() => {
        Snackbar.dismiss();
        navigation.navigate(screenNames.Topic, {
          reload: true,
        });
      }, Snackbar.LENGTH_SHORT);
    }
  }, [
    createFailed,
    createSuccess,
    createTopicSetDefault,
    error,
    message,
    navigation,
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

export default NewTopicScreen;
