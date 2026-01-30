import { Modal, View } from 'react-native';
import { styles } from './styles';

export default function CustomModal({ visible, children }: CustomModalProps) {
  return (
    <Modal transparent={true} visible={visible} animationType="slide">
      <View style={styles.modalContainer}>{children}</View>
    </Modal>
  );
}
