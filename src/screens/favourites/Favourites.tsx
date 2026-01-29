import { FlatList, View } from 'react-native';

import { useFavMoviesStore } from '@store/favourites';
import MovieCard from '@components/movieCard';
import { styles } from './styles';

export default function Favourites() {
  const favourites = useFavMoviesStore(state => state.favourites);

  return (
    <FlatList
      data={favourites}
      numColumns={2}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item }) => <MovieCard movieDetails={item} />}
      keyExtractor={item => item.movieId.toString()}
    />
  );
}
