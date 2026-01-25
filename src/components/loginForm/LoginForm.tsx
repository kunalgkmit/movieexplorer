import React, { useState } from 'react';
import { Text, View } from 'react-native';

import CustomButton from '@components/button';

import { styles } from './styles';
import { useLogin } from 'hooks/useLogin';
import CustomTextInput from '@components/textInput/TextInput';

export default function LoginForm({ title, subtitle }: LoginFormProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: '',
    password: '',
  });

  const { mutate, isPending } = useLogin();

  const handleSubmit = () => {
    const userNameError =
      userName.trim() === '' ? 'Please enter a valid username' : '';
    const passwordError =
      password.trim() === ''
        ? 'Please enter your password'
        : password.length < 8
        ? 'Password should be 8 characters long'
        : '';

    setErrors({
      userName: userNameError,
      password: passwordError,
    });

    if (!userNameError && !passwordError) {
      mutate({ userName, password });
    }
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <CustomTextInput
        placeholder="Username"
        value={userName}
        onChangeText={setUserName}
        error={errors.userName}
        autoCapitalize="none"
        editable={!isPending}
      />

      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        error={errors.password}
        autoCapitalize="none"
        editable={!isPending}
        secureTextEntry={true}
      />

      <CustomButton
        title="Login"
        onPress={handleSubmit}
        isPending={isPending}
      />
    </View>
  );
}
