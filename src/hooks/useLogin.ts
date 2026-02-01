import { Alert } from 'react-native';
import { useMutation } from '@tanstack/react-query';

import { userLogin, userLogout } from '@services/auth.service';
import { useUserSession } from '@store/userSession';
import { useFavMoviesStore } from '@store/favourites';

export const useLogin = () =>
  useMutation({
    mutationFn: userLogin,

    onError: error => {
      Alert.alert('Login Failed', error.message, [{ text: 'OK' }]);
    },
  });

export const useLogout = () => {
  return useMutation({
    mutationFn: userLogout,

    onSuccess: () => {
      useUserSession.persist.clearStorage();
      useFavMoviesStore.persist.clearStorage();
      useUserSession.setState({
        isLoggedIn: false,
      });
    },
  });
};
