import { NavigationContainer } from '@react-navigation/native';

import CustomActivityIndicator from '@components/customActivityIndicator';
import { useUserSession } from '@store/userSession';
import LoginScreen from '@screens/login/Login';
import StackNavigator from './StackNavigation';
import { COLORS } from '@constants/colors';

export default function Routes() {
  const isLoggedIn = useUserSession(state => state.isLoggedIn);
  const isSessionHydrated = useUserSession(state => state.isSessionHydrated);

  if (!isSessionHydrated) {
    return <CustomActivityIndicator color={COLORS.SHADOW} />;
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <StackNavigator /> : <LoginScreen />}
    </NavigationContainer>
  );
}
