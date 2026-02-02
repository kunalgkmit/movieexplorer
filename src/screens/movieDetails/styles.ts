import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDrop: {
    width: '100%',
    height: 400,
    opacity: 0.8,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 25,
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
  star: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.ACCENT_YELLOW,
  },

  rating: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
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

  subtitle: { fontWeight: 'bold', fontSize: 24 },

  detailsWrapper: { padding: 13, width: '100%' },

  favouriteWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.BG_SURFACE,
    right: 20,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overviewWrapper: { justifyContent: 'flex-start', paddingTop: 10, gap: 10 },

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

  ratingWrapper: { flexDirection: 'row' },
});
