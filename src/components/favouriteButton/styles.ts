import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  favouriteWrapper: {
    position: 'absolute',
    backgroundColor: COLORS.BG_SURFACE,
    right: -0.3,
    padding: 8,
    borderBottomStartRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 12,
  },
});
