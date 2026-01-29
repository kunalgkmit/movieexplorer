import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { useUserSession } from '@store/userSession';
import LoginScreen from '@screens/login/Login';
import { styles } from './styles';
import StackNavigator from './StackNavigation';

export default function Routes() {

  const isLoggedIn = useUserSession(state => state.isLoggedIn);
  const isSessionHydrated = useUserSession(state => state.isSessionHydrated);

  if (!isSessionHydrated) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <StackNavigator/> : <LoginScreen />}
    </NavigationContainer>
  );
}
