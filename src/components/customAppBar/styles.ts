import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: wp('100%'),
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 5, height: 9 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: COLORS.BG_PRIMARY,
    paddingBottom: wp('3%'),
  },

  title: {
    fontSize: wp('6%'),
    fontWeight: '600',
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
    paddingTop:10
  },

  selectedOption: {
    borderWidth: 1,
    padding: 2,
    borderRadius: 5,
    borderColor: COLORS.PRIMARY,
  },
});
