import { useFavMoviesStore } from '@store/favourites';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import MovieCard from '@components/movieCard';

export default function Favourites() {
  const favourites = useFavMoviesStore(state => state.favourites);
  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <MovieCard movieDetails={item} />}
        keyExtractor={item => item.movieId.toString()}
      />
    </View>
  );
}
