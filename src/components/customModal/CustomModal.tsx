import { Modal, Text, TouchableOpacity, View } from 'react-native';
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
      <View style={styles.blurBackground}></View>
      <View style={styles.modalWrapper}>
        <View style={styles.modalContainer}>
          <View />
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
