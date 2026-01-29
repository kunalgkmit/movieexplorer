import { fetchFavourites } from '@hooks/useFavourites';
import { axiosInstance } from '@network/axiosInstance';
import { ENDPOINTS } from '@network/URLs';
import { useUserSession } from '@store/userSession';

export const userLogin = async ({ userName, password }: LoginProps) => {
  // Get Request Token
  const tokenRes = await axiosInstance.get(ENDPOINTS.AUTH.REQUEST_TOKEN);
  const requestToken = tokenRes.data.request_token;

  // Login with Credentials
  const userData = {
    username: userName,
    password: password,
    request_token: requestToken,
  };
  const loginRes = await axiosInstance.post(
    ENDPOINTS.AUTH.SESSION_LOGIN,
    userData,
  );

  // Create session
  const loginRequestToken = {
    request_token: loginRes.data.request_token,
  };
  const sessionRes = await axiosInstance.post(
    ENDPOINTS.AUTH.CREATE_SESSION,
    loginRequestToken,
  );

  // Save session ID
  useUserSession.setState({
    sessionId: sessionRes.data.session_id,
    isLoggedIn: true,
  });
};
