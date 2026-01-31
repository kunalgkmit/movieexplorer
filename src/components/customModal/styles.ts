import { COLORS } from '@constants/colors';
import { Dimensions, StyleSheet } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    height: height / 2,
    marginTop: height / 4,
    paddingRight: 20,
    paddingLeft: 20,
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
});
