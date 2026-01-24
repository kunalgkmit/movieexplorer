import { userLogin } from '@services/auth.service';
import { useMutation } from '@tanstack/react-query';
import { Alert } from 'react-native';

export const useLogin = () =>
  useMutation({
    mutationFn: userLogin,

    onError: error => {
      Alert.alert('Login Failed', error.message, [{ text: 'OK' }]);
    },

    onSuccess: () => {
      Alert.alert('Success', 'Logged in successfully!', [{ text: 'OK' }]);
    },
  });
