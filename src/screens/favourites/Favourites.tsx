import { useFavMoviesStore } from '@store/favourites';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import MovieCard from '@components/movieCard';

export default function Favourites() {
  const favourites = useFavMoviesStore(state => state.favourites);
  const isFavourite = useFavMoviesStore(state => state.isFavourite);

  return (
    <View style={styles.container}>
      <FlatList
        data={favourites}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <MovieCard
            movieId={item.id}
            posterPath={item.poster_path}
            title={item.title}
            releaseDate={item.release_date}
            rating={item.rating}
            checkFav={isFavourite(item.id)}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
