import { View, Text, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { styles } from './styles';

export default function CustomAppBar({
  title,
  isMovieDetailsScreen,
  isHomeScreen,
  setSort,
  setFilter,
}: CustomAppBarProps) {
  const navigation = useNavigation<StackNavProp>();

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <View style={styles.titleWrapper}>
        {isMovieDetailsScreen && (
          <TouchableOpacity onPress={() => navigation.pop()}>
            <Ionicons name="arrow-back-outline" size={24} />
          </TouchableOpacity>
        )}

        <Text style={styles.title}>{title}</Text>
      </View>
      {isHomeScreen && (
        <View style={styles.sortFilterWrapper}>
          <TouchableOpacity onPress={setSort}>
            <Ionicons name="filter-outline" size={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={setFilter}>
            <Ionicons name="funnel-outline" size={24} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
