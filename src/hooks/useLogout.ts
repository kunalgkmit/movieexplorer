import { useMutation } from '@tanstack/react-query';

import { userLogout } from '@services/auth.service';
import { useFavMoviesStore } from '@store/favourites';
import { useUserSession } from '@store/userSession';

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

    onError: () => {
      useUserSession.setState({
        isLoggedIn: false,
      });
    },
  });
};
