import {
  Modal,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { styles } from './styles';

export default function CustomModal({
  modalName,
  visible,
  children,
  isVisible,
}: CustomModalProps) {
  const handleModalClose = () => {
    visible();
  };

  return (
    <Modal transparent={true} visible={isVisible} animationType="fade">
      <TouchableWithoutFeedback onPress={handleModalClose}>
        <View style={styles.blurBackground}></View>
      </TouchableWithoutFeedback>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>{modalName}</Text>
          <TouchableOpacity
            onPress={handleModalClose}
            style={styles.closeButton}
          >
            <Ionicons name="close-outline" size={30} />
          </TouchableOpacity>
          {children}
        </View>
      </View>
    </Modal>
  );
}
