import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
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

  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  return (
    <View style={[styles.container, getSafeAreaPadding()]}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.contentWrapper}>
        <Text style={[styles.title, { fontSize: isLandscape ? 20 : 26 }]}>
          {title}
        </Text>
        {isHomeScreen && (
          <View style={styles.sortFilterWrapper}>
            <TouchableOpacity onPress={setSort}>
              <Ionicons
                name="filter-outline"
                size={24}
                color={sortHightlight ? COLORS.PRIMARY : COLORS.BG_CARD}
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
                color={filterHighlight ? COLORS.PRIMARY : COLORS.BG_CARD}
              />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
