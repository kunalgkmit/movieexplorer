import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '70%',
  },

  genreButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.BG_SURFACE,
  },
  selectedGenreButton: {
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

  filterButton: { width: '100%', gap: 8 },

  title: {
    fontSize: 25,
  },

  genreWrapper: { flexDirection: 'row', gap: 10, marginBottom: 20 },

  selectedOptionText: {
    fontSize: 15,
    color: COLORS.TEXT_INVERSE,
  },

  text: {
    fontSize: 15,
  },
});
