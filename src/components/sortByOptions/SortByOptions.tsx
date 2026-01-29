import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

interface SortByProps {
  setSortBy: (params: string) => void;
  toggleSort: () => void;
}

export default function SortByOptions({ setSortBy, toggleSort }: SortByProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          setSortBy('popularity.desc');
          toggleSort();
        }}
      >
        <Text style={styles.text}>Highly Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSortBy('vote_count.desc');
          toggleSort();
        }}
      >
        <Text style={styles.text}>High Rated</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSortBy('vote_count.asc');
          toggleSort();
        }}
      >
        <Text style={styles.text}>Low Rated</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSortBy('primary_release_date.desc');
          toggleSort();
        }}
      >
        <Text style={styles.text}>Upcoming Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setSortBy('primary_release_date.asc');
          toggleSort();
        }}
      >
        <Text style={styles.text}>Old Movies</Text>
      </TouchableOpacity>
    </View>
  );
}
