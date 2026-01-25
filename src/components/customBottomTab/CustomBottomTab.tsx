import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { ROUTES } from '@constants/routes';
import { styles } from './styles';
import { COLORS } from '@constants/colors';

const homeImg = require('@assets/images/home.png');
const favouritesImg = require('@assets/images/favourite.png');
const profileImg = require('@assets/images/avatar.png');

export default function CustomBottomTab({
  state,
  navigation,
}: BottomTabBarProps) {
  return (
    <View
      style={styles.container}
    >
      {state.routes.map((item, index) => {
        const isFocused = state.index === index;
        const color = isFocused ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY;
        return (
          <TouchableOpacity
            key={item.key}
            style={styles.button}
            onPress={() => navigation.navigate(item.name)}
          >
            <View>
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
