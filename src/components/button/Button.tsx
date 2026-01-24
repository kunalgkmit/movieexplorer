import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface Props {
  title: string;
  onPress: () => void;
}

export default function CustomButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}