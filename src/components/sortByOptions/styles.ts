import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    justifyContent: 'center',
    flex: 0.5,
  },

  text: {
    fontSize: wp('4%'),
  },

  selectedOptionText: {
    fontSize: wp('4%'),
    color: COLORS.TEXT_INVERSE,
  },

  sortButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.BG_SURFACE,
  },

  selectedSortButton: {
    padding: 10,
    borderRadius: 10,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1.5,
    backgroundColor: COLORS.PRIMARY_LIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});
