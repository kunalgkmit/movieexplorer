import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '12%',
    paddingHorizontal: 10,
    justifyContent:'space-between',
    flexDirection:'row'
  },

  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  title: {
    fontSize: 24,
    fontWeight: '600',
  },

  sortFilterWrapper:{
    flexDirection:'row',
    alignItems:'center',
    width:'25%',
    justifyContent:'space-around'
  },
});
