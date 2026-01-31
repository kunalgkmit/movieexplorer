import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    gap: 20,
    padding:20
  },
  text: {
    fontSize: 15,
  },
  sortButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: COLORS.BG_SURFACE,
  },
  title: {
    fontSize: 25,
  },
  buttonWrapper: { gap: 10 },
});
