import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  card: {
    width: wp('43.5%'),
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: COLORS.BG_CARD,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 5, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },

  poster: {
    width: wp('44%'),
    height: hp('30%'),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  infoContainer: {
    padding: 12,
  },

  title: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 6,
    fontFamily: 'KodeMono-Bold'
  },

  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  releaseDate: {
    fontSize: wp('3.3%'),
    color: COLORS.TEXT_SECONDARY,
    fontFamily: 'KodeMono-Bold'
  },

  favouriteWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.BG_SURFACE,
    right: -0.3,
    padding: 8,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 12,
  },

  ratingWrapper: { flexDirection: 'row', alignItems: 'center', gap: 4 },

  rating: {
    fontSize: wp('3.3%'),
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'KodeMono-Bold'
  },
});
