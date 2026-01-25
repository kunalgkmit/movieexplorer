import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';
import { COLORS } from '@constants/colors';

export default function CustomButton({
  title,
  onPress,
  isPending,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={isPending}
    >
      {isPending ? (
        <ActivityIndicator size="small" color={COLORS.BG_SURFACE} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
