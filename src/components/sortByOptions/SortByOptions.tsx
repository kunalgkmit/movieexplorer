import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { SORT_OPTIONS, SORT_SELECTION_ARRAY } from '@constants/constants';
import { COLORS } from '@constants/colors';
import { styles } from './styles';

export default function SortByOptions({
  sortBy,
  setSortBy,
  toggleSort,
}: SortByProps) {
  
  const handleSortSelection = (sortOption: string) => {
    setSortBy(sortOption);
    toggleSort();
  };

  const handleClose = () => {
    setSortBy(SORT_OPTIONS.POPULARITY_DESC);
  };

  return (
    <View style={styles.container}>
      {SORT_SELECTION_ARRAY.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={
            sortBy === item.sortOption
              ? styles.selectedSortButton
              : styles.sortButton
          }
          onPress={() => handleSortSelection(item.sortOption)}
        >
          <Text
            style={
              sortBy === item.sortOption
                ? styles.selectedOptionText
                : styles.text
            }
          >
            {item.sortName}
          </Text>
          {sortBy === item.sortOption ? (
            <TouchableOpacity onPress={handleClose}>
              <Ionicons name="close-outline" size={20} color={COLORS.BG_SURFACE}/>
            </TouchableOpacity>
          ) : null}
        </TouchableOpacity>
      ))}
    </View>
  );
}
