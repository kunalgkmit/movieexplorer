import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDrop: {
    width: wp('100%'),
    height: hp('45%'),
    opacity: 0.8,
  },
  poster: {
    width: wp('50%'),
    height: hp('35%'),
    marginTop: hp('-30%'),
    borderRadius:20,
  },
  posterWrapper: {
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    elevation: 5,
  },
  starColor: {
    color: COLORS.ACCENT_YELLOW,
  },

  ratingColor: {
    color: COLORS.TEXT_PRIMARY,
  },

  ratingContent: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
  },

  releaseDate: {
    fontSize: wp('5%'),
    color: COLORS.TEXT_SECONDARY,
  },

  overview: {
    fontSize: wp('4%'),
    color: COLORS.TEXT_PRIMARY,
    fontStyle: 'italic',
  },

  title: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: wp('7%'),
    paddingRight:15
  },

  detailsWrapper: {
    padding: 13,
    width: wp('100%'),
  },

  favouriteWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.BG_SURFACE,
    right: 20,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 20,
  },

  overviewWrapper: { justifyContent: 'flex-start', paddingTop: 10, gap: 10 },

  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  movieCardWrapper: { flex: 1, padding: 7 },

  contentContainer: {
    padding: 5,
  },

  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    top: hp('5.5%'),
    padding: 20,
    justifyContent: 'center',
  },

  recommendedText: { paddingLeft: 13 },

  listWrapper: {
    width: '100%',
    marginTop: 7,
  },

  ratingWrapper: { alignItems: 'center', gap: 4 },

  backButton: {
    backgroundColor: COLORS.BG_SURFACE,
    position: 'absolute',
    left: 20,
    padding: 8,
    borderRadius: 20,
  },
});
