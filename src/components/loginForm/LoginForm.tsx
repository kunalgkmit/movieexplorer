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

  const validatePassword = (pwd: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!pwd) {
      return 'Password is required.';
    }
    if (!passwordRegex.test(pwd)) {
      return 'Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one number, and one special character.';
    }
    return '';
  };

  const handleSubmit = () => {
    const userNameError =
      userName.trim() === '' ? 'Please enter a valid username' : '';
    const passwordError = validatePassword(password);

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
        editable={!isPending}
      />

      <CustomTextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        error={errors.password}
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
