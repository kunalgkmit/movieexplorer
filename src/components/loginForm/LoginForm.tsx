import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, View } from 'react-native';

import { COLORS } from '@constants/colors';
import CustomButton from '@components/button';

import { styles } from './styles';
import { useLogin } from 'hooks/useLogin';

export default function LoginForm({ title, subtitle }: LoginFormProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: false,
    password: false,
  });

  const { mutate, isPending } = useLogin();

  const handleSubmit = () => {
    const userNameError = userName.trim() === '';
    const passwordError = password.trim() === '';

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

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.userName && styles.inputError]}
          placeholder="Username"
          placeholderTextColor={COLORS.TEXT_TERTIARY}
          value={userName}
          onChangeText={setUserName}
          autoCapitalize="none"
          editable={!isPending}
        />
        {errors.userName && (
          <Text style={styles.errorText}>Please enter a valid username</Text>
        )}
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, errors.password && styles.inputError]}
          placeholder="Password"
          placeholderTextColor={COLORS.TEXT_TERTIARY}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          editable={!isPending}
        />
        {errors.password && (
          <Text style={styles.errorText}>Please enter your password</Text>
        )}
      </View>

      {!isPending ? (
        <CustomButton title="Login" onPress={handleSubmit} />
      ) : (
        <ActivityIndicator size="small" />
      )}
    </View>
  );
}
