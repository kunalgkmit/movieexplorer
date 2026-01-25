import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: '10%',
    paddingBottom: 7,
    backgroundColor: COLORS.BG_PRIMARY,
  },
  image: {
    width: 20,
    height: 20,
  },
  button: {
    alignItems: 'center',
    gap: '13%',
  },
  title: {
    fontWeight: 'bold',
  },
});
