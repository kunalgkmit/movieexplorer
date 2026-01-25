import { NavigationContainer } from '@react-navigation/native';
import { MyTabs } from './BottomTabs';
import { useUserSession } from '@store/userSession';
import { ActivityIndicator, View } from 'react-native';
import LoginScreen from '@screens/login/Login';
export default function Routes() {
  const isLoggedIn = useUserSession(state=>state.isLoggedIn);
  const isSessionHydrated = useUserSession(state=>state.isSessionHydrated);

  if (!isSessionHydrated) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
  <NavigationContainer>
    {isLoggedIn ? <MyTabs/> : <LoginScreen/>}
  </NavigationContainer>
  
);
}
