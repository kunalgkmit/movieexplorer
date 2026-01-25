import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: COLORS.BG_CARD,
    borderRadius: 20,
    padding: 30,
    shadowColor: COLORS.SHADOW,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 10,
    alignItems: 'center',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.TEXT_PRIMARY,
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: COLORS.TEXT_SECONDARY,
    marginBottom: 30,
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
    borderColor: COLORS.STATUS_ERROR,
    borderWidth: 1.5,
  },

  errorText: {
    color: COLORS.STATUS_ERROR,
    fontSize: 12,
    marginTop: 6,
    paddingLeft: 4,
  },
});
