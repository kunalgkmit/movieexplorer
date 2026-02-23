import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    backgroundColor: COLORS.SHADOW,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.TEXT_INVERSE,
    fontSize: 18,
    // fontWeight: 'bold',
    fontFamily:'KodeMono-Bold'
  },
});
