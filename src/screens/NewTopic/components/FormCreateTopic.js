import * as React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {AppTextInput, AppButton, AppDevider} from './../../../component';

const FormCreateTopic = (props) => {
  const {control, handleSubmit, errors} = useForm();

  return (
    <>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            mode="outlined"
            placeholder="Topic Title"
            returnKeyLabel="Next"
            returnKeyType="next"
            autoFocus={true}
            onFocus={props.onFocus}
            onBlur={onBlur}
            value={value}
            onChangeText={(text) => onChange(text)}
            error={!!errors.title}
            errorText={errors?.title?.message}
            autoCapitalize="none"
            disabled={props.loading}
          />
        )}
        name="title"
        rules={{
          required: {value: true, message: 'Title is required'},
        }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            mode="outlined"
            height={100}
            placeholder="Questions or Description"
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

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            mode="outlined"
            placeholder="Exp: Javascript,React Native,React"
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
        name="tags"
        rules={{required: {value: true, message: 'This field is required'}}}
        defaultValue=""
      />

      <AppDevider flex={1} />
      <AppButton
        title="Create Topic"
        mode="contained"
        onPress={handleSubmit(props.onSubmit)}
        loading={props.loading}
      />
    </>
  );
};

export default FormCreateTopic;
