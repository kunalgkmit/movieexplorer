import { StyleSheet } from 'react-native';

import { COLORS } from '@constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },

  radioContainer: {
    flexDirection: 'row',
  },

  buttonText: {
    fontSize: 15,
    color: COLORS.TEXT_PRIMARY,
    fontFamily: 'KodeMono-Bold',
  },
  radio: {
    height: 25,
    width: 25,
    borderWidth: 1,
    borderColor: COLORS.SHADOW,
    borderRadius: 12.5,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: COLORS.SHADOW,
    height: 18,
    width: 18,
    borderRadius: 20,
    margin: 2.6,
  },
  button: {
    flex: 1,
    justifyContent: 'space-around',
  },

  genderError: {
    color: COLORS.RED,
  },

  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  landscapeInput: {
    width: '50%',
    paddingHorizontal: 10
  },

  landscapeButton: {
    width: '50%',
    alignItems:'center'
  },
});
