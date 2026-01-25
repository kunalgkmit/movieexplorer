import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginScreen from '@screens/login/Login';

const queryClient = new QueryClient();

function App() {

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <LoginScreen />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
