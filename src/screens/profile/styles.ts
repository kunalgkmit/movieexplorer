import { COLORS } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
  },

  avatarBG: {
    backgroundColor: COLORS.PRIMARY,
    height: 100,
    width: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarInitials: {
    fontSize: 50,
    color: COLORS.TEXT_INVERSE,
  },

  name: {
    fontSize: 30,
    color: COLORS.TEXT_PRIMARY,
  },

  buttonStyle: { width: '25%' },

  activityIndicator: {
    alignItems:'center',
    justifyContent:'center'
  }
});
