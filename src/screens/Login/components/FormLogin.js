import * as React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {AppTextInput, AppButton} from './../../../component';

const FormLogin = (props) => {
  const {control, handleSubmit, errors} = useForm();

  const [showPassword, setShowPassword] = React.useState(false);

  const _onShowPasswordToggled = () => setShowPassword(!showPassword);
  return (
    <>
      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            label={'Email'}
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
        name="email"
        rules={{
          required: {value: true, message: 'Email is required'},
          pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid Email Format',
          },
        }}
        defaultValue=""
      />

      <Controller
        control={control}
        render={({onChange, onBlur, value}) => (
          <AppTextInput
            label="Password"
            mode="outlined"
            returnKeyLabel="Done"
            returnKeyType="done"
            onFocus={props.onFocus}
            onBlur={onBlur}
            value={value}
            secureTextEntry={!showPassword}
            keyboardType="decimal-pad"
            onChangeText={(text) => onChange(text)}
            error={!!errors.password}
            errorText={errors?.password?.message}
            autoCapitalize="none"
            disabled={props.loading}
          />
        )}
        name="password"
        rules={{required: {value: true, message: 'Password is required'}}}
        defaultValue=""
      />

      <AppButton
        title="Login"
        mode="contained"
        onPress={handleSubmit(props.onSubmit)}
        loading={props.loading}
      />
    </>
  );
};

export default FormLogin;
