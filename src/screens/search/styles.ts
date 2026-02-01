import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BG_PRIMARY,
  },

  listContent: {
    paddingHorizontal: 20,
  },

  columnWrapper: {
    justifyContent: 'space-between',
  },

  textInputWrapper: { paddingTop: 10, paddingHorizontal: 10 },
});
