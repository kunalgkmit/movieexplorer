import { Dimensions, StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';

const { height, width } = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDrop: {
    width: width,
    height: height / 2,
    opacity: 0.8,
  },
  poster: {
    width: width,
    height: height / 3,
  },
  posterWrapper: {
    marginTop: '-50%',
    paddingBottom: 10,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 4 },
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
    fontSize: 25,
    fontWeight: 'bold',
  },

  releaseDate: {
    fontSize: 20,
    color: COLORS.TEXT_SECONDARY,
  },

  overview: {
    fontSize: 16,
    color: COLORS.TEXT_PRIMARY,
    fontStyle: 'italic',
  },

  title: { fontWeight: 'bold', fontSize: 24, lineHeight: 25, flexShrink: 1 },

  detailsWrapper: { padding: 13, width: '100%' },

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
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  movieCardWrapper: { flex: 1, padding: 7 },

  contentContainer: {
    padding: 5,
  },

  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    top: 40,
    padding: 20,
    justifyContent: 'center',
  },

  recommendedText: { paddingLeft: 13 },

  listWrapper: {
    width: '100%',
    marginTop: 10,
  },

  ratingWrapper: { flexDirection: 'row', alignItems: 'center', gap: 4 },

  backButton: {
    backgroundColor: COLORS.BG_SURFACE,
    position: 'absolute',
    left: 20,
    padding: 8,
    borderRadius: 20,
  },
});
