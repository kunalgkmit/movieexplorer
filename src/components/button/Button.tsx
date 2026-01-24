import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function CustomButton({ title, onPress }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
