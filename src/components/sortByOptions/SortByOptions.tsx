import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface SortByProps {
  setSortBy: (params: string) => void;
  toggleSort: () => void;
}

export default function SortByOptions({ setSortBy, toggleSort }: SortByProps) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => {
            setSortBy('popularity.desc');
            toggleSort();
          }}
        >
          <Text style={styles.text}>Highly Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => {
            setSortBy('vote_count.desc');
            toggleSort();
          }}
        >
          <Text style={styles.text}>High Rated</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => {
            setSortBy('primary_release_date.desc');
            toggleSort();
          }}
        >
          <Text style={styles.text}>Upcoming Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.sortButton}
          onPress={() => {
            setSortBy('primary_release_date.asc');
            toggleSort();
          }}
        >
          <Text style={styles.text}>Old Movies</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
