import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 20,
  },

  text: {
    fontSize: 15,
  },

  selectedOptionText: {
    fontSize: 15,
    color: COLORS.TEXT_INVERSE,
  },

  sortButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.BG_SURFACE,
  },

  selectedSortButton: {
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

  title: {
    fontSize: 25,
  },
});
