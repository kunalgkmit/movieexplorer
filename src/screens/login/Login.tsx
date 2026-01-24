import React from 'react';
import { View } from 'react-native';
import { APP_INFO } from '@constants/constants';
import { useLogin } from 'hooks/useLogin';
import { styles } from './styles';
import LoginForm from '@components/loginForm/LoginForm';

export default function LoginScreen() {
  const { mutate, isPending } = useLogin();

  return (
    <View style={styles.container}>
      <LoginForm
        title={APP_INFO.TITLE}
        subtitle={APP_INFO.LOGIN_SUBTITLE}
        onSubmit={mutate}
        isPending={isPending}
      />
    </View>
  );
}
