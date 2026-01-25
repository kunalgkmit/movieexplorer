import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../../constants/colors';
import { ROUTES } from '@constants/routes';
import { styles } from './styles';

const homeImg = require('@assets/images/home.png');
const favouritesImg = require('@assets/images/favourite.png');
const profileImg = require('@assets/images/avatar.png');

export default function CustomBottomTab({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: '10%',
        paddingBottom: 10,
        backgroundColor: COLORS.PRIMARY,
      }}
    >
      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? COLORS.BUTTON_COLOR : COLORS.TITLE;
        return (
          <TouchableOpacity
            key={item.key}
            style={styles.button}
            onPress={() => navigation.navigate(item.name)}
          >
            <View
              style={[
                styles.imageHighlight,
              ]}
            >
              <Image
                style={[styles.image, { tintColor: color }]}
                source={
                  item.name === ROUTES.TABS.HOME
                    ? homeImg
                    : item.name === ROUTES.TABS.FAVOURITES
                    ? favouritesImg
                    : profileImg
                }
              />
            </View>
            <Text style={[styles.title, { color: color }]}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}