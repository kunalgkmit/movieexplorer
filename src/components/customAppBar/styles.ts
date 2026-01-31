import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '12%',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 5, height: 9 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
    backgroundColor:COLORS.BG_PRIMARY
  },

  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    justifyContent:'flex-start',
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
  },

  sortFilterWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '25%',
    justifyContent: 'space-around',
  },
});
