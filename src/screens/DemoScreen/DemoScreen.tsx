import { View, Text } from 'react-native';
import { styles } from './styles';

export default function DemoScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text testID='greeting'>GREETING</Text>
      </View>
    </>
  );
}
