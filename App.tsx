import { View, Text } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';

function App() {

  return (
    <SafeAreaProvider>
      <View>
        <Text>This is Movie Explorer!</Text>
      </View>
    </SafeAreaProvider>
  );
}

export default App;
