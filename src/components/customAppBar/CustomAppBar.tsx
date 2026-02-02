import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@react-native-vector-icons/ionicons';
import { COLORS } from '@constants/colors';

import { styles } from './styles';

export default function CustomAppBar({
  title,
  isHomeScreen,
  setSort,
  setFilter,
  sortHightlight,
  filterHighlight,
}: CustomAppBarProps) {
  const insets = useSafeAreaInsets();

  const getSafeAreaPadding = () => ({
    paddingTop: insets.top,
  });

  return (
    <View style={[styles.container, getSafeAreaPadding()]}>
      <StatusBar barStyle={'dark-content'} translucent={true} />
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>{title}</Text>
        {isHomeScreen && (
          <View style={styles.sortFilterWrapper}>
            <TouchableOpacity onPress={setSort}>
              <Ionicons
                name="filter-outline"
                size={24}
                color={sortHightlight ? COLORS.PRIMARY : COLORS.SHADOW}
                style={sortHightlight && styles.selectedOption}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={setFilter}
              style={filterHighlight && styles.selectedOption}
            >
              <Ionicons
                name="funnel-outline"
                size={24}
                color={filterHighlight ? COLORS.PRIMARY : COLORS.SHADOW}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
