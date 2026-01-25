import { Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';

import { userLogin } from '@services/auth.service';

export const useLogin = () =>
  useMutation({
    mutationFn: userLogin,

    onError: error => {
      Alert.alert('Login Failed', error.message, [{ text: 'OK' }]);
    },
  });
