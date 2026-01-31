import { Dimensions, StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.BG_CARD,
    borderRadius: 30,
    gap: 10,
  },

  closeButton: { position: 'absolute', top: 20, right: 20 },

  modalTitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },

  modalWrapper: {
    height: height,
    marginTop: height / 4,
  },

  blurBackground: {
    backgroundColor: COLORS.SHADOW,
    flex: 1,
    opacity: 0.5,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  contentWrapper: { height: '5%' },
});
