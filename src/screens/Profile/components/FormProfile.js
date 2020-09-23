import * as React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {AppTextInput} from './../../../component';

const FormProfile = (props) => {
  const {control, handleSubmit, errors} = useForm();

  return (
    <>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            label={'Display Name'}
            mode="outlined"
            returnKeyLabel="Next"
            returnKeyType="next"
            onFocus={props.onFocus}
            onBlur={onBlur}
            value={value}
            onChangeText={(text) => onChange(text)}
            error={!!errors.email}
            errorText={errors?.email?.message}
            autoCapitalize="none"
            disabled={props.loading}
          />
        )}
        name="display_name"
        rules={{
          required: {value: true, message: 'Display Name is required'},
        }}
        defaultValue="Error Resolver"
      />

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            label={'Full Name'}
            mode="outlined"
            returnKeyLabel="Next"
            returnKeyType="next"
            onFocus={props.onFocus}
            onBlur={onBlur}
            value={value}
            onChangeText={(text) => onChange(text)}
            error={!!errors.email}
            errorText={errors?.email?.message}
            autoCapitalize="none"
            disabled={props.loading}
          />
        )}
        name="full_name"
        rules={{
          required: {value: true, message: 'Full Name is required'},
        }}
        defaultValue="Aden Trisna Daud Kurnia"
      />

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            label={'Location'}
            mode="outlined"
            returnKeyLabel="Next"
            returnKeyType="next"
            onFocus={props.onFocus}
            onBlur={onBlur}
            value={value}
            onChangeText={(text) => onChange(text)}
            error={!!errors.email}
            errorText={errors?.email?.message}
            autoCapitalize="none"
            disabled={props.loading}
          />
        )}
        name="location"
        rules={{
          required: {value: true, message: 'Location is required'},
        }}
        defaultValue="Bandung, Indonesia"
      />
    </>
  );
};

export default FormProfile;
