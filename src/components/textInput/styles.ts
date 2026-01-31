import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },

  input: {
    height: 52,
    backgroundColor: COLORS.BG_SURFACE,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.BORDER,
  },

  inputError: {
    borderColor: COLORS.RED,
    borderWidth: 1.5,
  },

  errorText: {
    color: COLORS.RED,
    fontSize: 12,
    marginTop: 6,
    paddingLeft: 4,
  },

  eyeIcon: { position: 'absolute', right: 10, top: 15 },
});
