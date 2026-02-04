import { View, ActivityIndicator } from 'react-native';

import { COLORS } from '@constants/colors';
import { styles } from './styles';

export default function CustomActivityIndicator({ color }: { color?: string }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={color || COLORS.SHADOW} />
    </View>
  );
}
