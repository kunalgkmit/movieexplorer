import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  ActivityIndicator,
  Alert,
  Text,
  TextInput,
  View,
} from 'react-native';
import { userLogin } from '@services/auth.service';
import { COLORS } from '@constants/colors';
import CustomButton from '@components/button';
import { styles } from './styles';

export default function LoginScreen() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({
    userName: false,
    password: false,
  });

  const {mutate, isPending } = useMutation({
    mutationFn: userLogin,
    onError: (error: Error) => {
      Alert.alert('Login Failed', error.message , [
        { text: 'OK' },
      ]);
    },
    onSuccess: () => {
      Alert.alert('Success', 'Logged in successfully!');
    },
  });

  const loginHandle = () => {
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
    <View style={styles.container}>

      <View style={styles.card}>
        <Text style={styles.title}>Movie Explorer</Text>
        <Text style={styles.subtitle}>Login to continue</Text>

        <View style={styles.inputContainer}>
          <TextInput
            style={[
              styles.input,
              errors.userName && styles.inputError,
            ]}
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
            style={[
              styles.input,
              errors.password && styles.inputError,
            ]}
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

        {!isPending ? <CustomButton title='Login' onPress={loginHandle}/> : <ActivityIndicator size={'small'}/>}
      </View>
    </View>
  );
}