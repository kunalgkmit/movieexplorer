import React, { useState } from 'react';
import { ActivityIndicator, Text, TextInput, View } from 'react-native';

import { COLORS } from '@constants/colors';
import CustomButton from '@components/button';

import { styles } from './styles';

export default function LoginForm({
  title,
  subtitle,
  onSubmit,
  isPending = false,
}: LoginFormProps) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: false,
    password: false,
  });

  const handleSubmit = () => {
    const userNameError = userName.trim() === '';
    const passwordError = password.trim() === '';

    setErrors({
      userName: userNameError,
      password: passwordError,
    });

    if (!userNameError && !passwordError) {
      onSubmit({ userName, password });
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
          placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
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
          placeholderTextColor={COLORS.INPUT_PLACEHOLDER}
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
