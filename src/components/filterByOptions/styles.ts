import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '70%',
    flex: 0.5,
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
    width: '40%',
    gap: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    fontSize: 25,
  },

  genreWrapper: { 
    flexDirection: 'row', 
    gap: 10,
     marginBottom: 20
   },

  selectedOptionText: {
    fontSize: 15,
    color: COLORS.PRIMARY,
  },

  text: {
    fontSize: 15,
  },
});
