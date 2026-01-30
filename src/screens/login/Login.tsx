import React from 'react';
import { StatusBar, View } from 'react-native';

import { APP_INFO } from '@constants/constants';
import LoginForm from '@components/loginForm/LoginForm';

import { styles } from './styles';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
            <StatusBar barStyle={'dark-content'} />
      
      <LoginForm title={APP_INFO.TITLE} subtitle={APP_INFO.LOGIN_SUBTITLE} />
    </View>
  );
}
