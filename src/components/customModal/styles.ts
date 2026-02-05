import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.BG_CARD,
    borderRadius: 30,
    gap: 30,
    justifyContent: 'center',
  },

  closeButton: { position: 'absolute', top: 20, right: 20 },

  modalTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
  },

  modalWrapper: {
    height: hp('40%'),
    marginVertical: wp('60%'),
    paddingHorizontal: 20,
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
