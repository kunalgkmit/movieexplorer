import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Routes from '@navigation/Routes';

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
