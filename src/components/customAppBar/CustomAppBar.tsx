import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { styles } from './styles';

export default function CustomAppBar({
  title,
  isHomeScreen,
  setSort,
  setFilter,
}: CustomAppBarProps) {
  const navigation = useNavigation<StackNavProp>();

  const insets = useSafeAreaInsets();

  const getSafeAreaPadding = () => ({
    paddingTop: insets.top,
  });

  return (
    <View style={[styles.container, getSafeAreaPadding()]}>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Text style={styles.title}>{title}</Text>
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
    </View>
  );
}
