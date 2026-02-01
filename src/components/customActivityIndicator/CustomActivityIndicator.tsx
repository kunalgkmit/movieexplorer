import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { styles } from './styles';

export default function CustomActivityIndicator({ color }: { color: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color} />
    </View>
  );
}
