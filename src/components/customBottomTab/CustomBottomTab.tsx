import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@react-native-vector-icons/ionicons';

import { ROUTES } from '@constants/routes';
import { styles } from './styles';
import { COLORS } from '@constants/colors';
import { ICONS } from '@constants/constants';

export default function CustomBottomTab({
  state,
  navigation,
}: BottomTabBarProps) {
  const getIconName = (routeName: string, isFocused: boolean): string => {
    if (routeName === ROUTES.TABS.HOME) {
      return isFocused ? ICONS.HOME : ICONS.HOME_OUTLINE;
    } else if (routeName === ROUTES.TABS.FAVOURITES) {
      return isFocused ? ICONS.HEART : ICONS.HEART_OUTLINE;
    } else {
      return isFocused ? ICONS.ACCOUNT : ICONS.ACCOUNT_OUTLINE;
    }
  };

  return (
    <View style={styles.container}>
      {state.routes.map((item, index) => {
        const isFocused = state.index === index;

        const iconName = getIconName(item.name, isFocused);

        const color = isFocused ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY;

        return (
          <TouchableOpacity
            key={item.key}
            style={styles.button}
            onPress={() => navigation.navigate(item.name)}
          >
            <Ionicons name={iconName} size={30} color={color} />

            <Text style={[styles.title, { color: color }]}>{item.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
