import { StyleSheet, Platform } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 5, height: 9 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    ...Platform.select({
      ios: {
        backgroundColor: COLORS.BORDER,
      },
      android: {
        backgroundColor: COLORS.SHADOW,
      },
    }),
    // paddingBottom: wp('3%'),
  },

  title: {
    fontSize: wp('7%'),
    fontWeight: '600',
    ...Platform.select({
      ios: {
        color: COLORS.TEXT_PRIMARY
      },
      android: {
        color: COLORS.TEXT_INVERSE
      }
    }),
    fontFamily: 'KodeMono-Bold',
  },

  sortFilterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('23%'),
    justifyContent: 'space-around',
  },

  contentWrapper: {
    width: wp('90%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },

  selectedOption: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    borderColor: COLORS.PRIMARY,
  },
});
