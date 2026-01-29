import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  backDrop: {
    width: '100%',
    height: '40%',
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 25,
  },
  posterWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '-50%',
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
  title: { fontWeight: 'bold', fontSize: 40 },
  subtitle: { fontWeight: 'bold', fontSize: 30 },
  detailsWrapper: { padding: 10 },
  favouriteWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.BG_SURFACE,
    right: 20,
    top:40,
    padding: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
