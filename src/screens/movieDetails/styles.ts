import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backDrop: {
    width: '100%',
    height: 300,
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
  rating: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.ACCENT_YELLOW,
  },

  releaseDate: {
    fontSize: 20,
    color: COLORS.TEXT_SECONDARY,
  },

  overview: {
    fontSize: 18,
    color: COLORS.TEXT_PRIMARY,
    fontStyle: 'italic',
  },

  title: { fontWeight: 'bold', fontSize: 24, lineHeight: 25, flexShrink: 1 },

  subtitle: { fontWeight: 'bold', fontSize: 24 },

  detailsWrapper: { padding: 13, width: '100%' },

  favouriteWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.BG_SURFACE,
    right: 10,
    top: 10,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  overviewWrapper: { justifyContent: 'flex-start', paddingTop: 10, gap: 10 },

  indicator: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  movieCardWrapper: { flex: 1, padding: 10 },
});
