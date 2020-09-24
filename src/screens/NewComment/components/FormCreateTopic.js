import * as React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {AppTextInput, AppButton, AppDevider} from '../../../component';

const FormCreateTopic = (props) => {
  const {control, handleSubmit, errors} = useForm();

  return (
    <>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            mode="outlined"
            height={100}
            placeholder="Your Answer"
            returnKeyLabel="Next"
            returnKeyType="next"
            onFocus={props.onFocus}
            onBlur={onBlur}
            value={value}
            onChangeText={(text) => onChange(text)}
            error={!!errors.content}
            errorText={errors?.content?.message}
            disabled={props.loading}
          />
        )}
        name="content"
        rules={{required: {value: true, message: 'This field is required'}}}
        defaultValue=""
      />
      <AppDevider flex={1} />
      <AppButton
        title="Post Answer"
        mode="contained"
        onPress={handleSubmit(props.onSubmit)}
        loading={props.loading}
      />
    </>
  );
};

export default FormCreateTopic;
