import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.TEXT_INVERSE,
    fontSize: 18,
    fontWeight: '600',
  },

  clearFilter: {
    backgroundColor: COLORS.BG_SURFACE,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },

  logout: { backgroundColor: COLORS.RED },

  clearFilterText: { color: COLORS.PRIMARY },
});