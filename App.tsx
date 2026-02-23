import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Routes from '@navigation/Routes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'reduxStore/store';
import { Text } from 'react-native';

const queryClient = new QueryClient();

function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Routes />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

export default App;
