import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width:'100%',
    padding:90,
  },

  genreButton: {
    backgroundColor: COLORS.BG_SURFACE,
    padding: 10,
    borderRadius: 10,
  },

  filterButton: { width: '100%' },

  title: {
    fontSize: 25,
  },

  genreWrapper: {flexDirection:'row', gap:10, marginBottom:20}
});
