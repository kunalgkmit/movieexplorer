import { Text, TouchableOpacity } from 'react-native';

import CustomActivityIndicator from '@components/customActivityIndicator';
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
        <CustomActivityIndicator color={COLORS.BG_SURFACE}/>
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
