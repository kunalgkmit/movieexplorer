import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: wp('70%'),
    justifyContent: 'center',
  },

  genreButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: COLORS.BG_SURFACE,
  },
  selectedGenreButton: {
    padding: 15,
    borderRadius: 10,
    borderColor: COLORS.PRIMARY,
    borderWidth: 1,
  },

  filterButtonsWrapper: {
    width: wp('30%'),
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  genreWrapper: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },

  selectedOptionText: {
    fontSize: wp('3%'),
    color: COLORS.PRIMARY,
  },

  text: {
    fontSize: wp('3%'),
  },
});
