import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {UnAuthenticatedStack} from './stacks/UnAuthenticated';
import AsyncStorage from '@react-native-community/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {LOGIN_SUCCESS} from '../redux/constants';
import {HomeTabs} from './tabs/Home';
import {AppLoading} from '../component';
import {doGetProfile} from '../redux/actions/auth';

const AppNavigation = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);
  const [localToken, setLocalToken] = React.useState(null);
  const [isReady, setIsReady] = React.useState(false);

  const tokenState = authState.auth.token;

  const getTokenFromStorage = async () => {
    let token = null;

    try {
      token = await AsyncStorage.getItem('token');
    } catch (error) {
    } finally {
      setIsReady(true);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: token,
      });

      if (token) {
        dispatch(doGetProfile());
      }
    }
  };

  const saveTokenToStorage = async (token) => {
    try {
      await AsyncStorage.setItem('token', token);
      setLocalToken(token);
    } catch (error) {}
  };

  React.useEffect(() => {
    const bootstrap = () => getTokenFromStorage();

    bootstrap();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    if (tokenState && !localToken) {
      saveTokenToStorage(tokenState);
    }
  });

  if (!isReady) {
    return <AppLoading visible={true} />;
  }

  return (
    <NavigationContainer>
      {!tokenState ? <UnAuthenticatedStack /> : <HomeTabs />}
    </NavigationContainer>
  );
};

export default AppNavigation;
