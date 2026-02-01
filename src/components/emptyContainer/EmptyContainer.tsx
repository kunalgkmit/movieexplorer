import { Text, View } from 'react-native';
import { styles } from './styles';

export default function EmptyContainer() {
  return (
    <View style={styles.container}>
      <Text>No Movies To Display</Text>
    </View>
  );
}
