import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  movieCardWrapper: {
    padding: 7,
  },

  contentContainer: {
    padding: 5,
  },

  recommendedText: { paddingLeft: 13 },

  title: {
    fontSize: wp('7%'),
    fontWeight: 'bold',
  },
});
