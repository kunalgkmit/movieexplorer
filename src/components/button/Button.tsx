import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

import { COLORS } from '@constants/colors';
import { styles } from './styles';

export default function CustomButton({
  title,
  onPress,
  isPending,
  isLogout,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, isLogout && { backgroundColor: COLORS.RED }]}
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
