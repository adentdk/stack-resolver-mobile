import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import {AppBox, AppTextInput} from '../../../component';
import colors from '../../../shared/colors';

const CreateNewTopic = ({onPress}) => {
  return (
    <AppBox height={110} color={colors.orange}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <AppTextInput
          label={''}
          mode="outlined"
          height={75}
          placeholder="Create New Topic"
          returnKeyLabel="Next"
          returnKeyType="next"
          onFocus={onPress}
          onBlur={onPress}
          value={''}
          onChangeText={(text) => {}}
          error={false}
          errorText={''}
          autoCapitalize="none"
          disabled={true}
        />
      </TouchableOpacity>
    </AppBox>
  );
};

export default CreateNewTopic;
