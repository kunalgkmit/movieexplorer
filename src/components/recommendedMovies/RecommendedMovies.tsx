import MovieCard from '@components/movieCard';
import { FlatList, Text, View } from 'react-native';
import { styles } from './styles';
import { useMemo } from 'react';
import { useRecommendedMovies } from '@hooks/useRecommendedMovies';
import { formatMovieData } from '@utils/helpers';
import { useFavMoviesStore } from '@store/favourites';

export default function RecommendedMovies({movieId}: {movieId?:number}) {
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);
  const isFavourite = useFavMoviesStore(state => state.isFavourite);

  const { data: recommendedMovies } = useRecommendedMovies(movieId);

  const movies = useMemo(
    () => formatMovieData(recommendedMovies ?? [], isFavourite),
    [recommendedMovies, favMovieIds],
  );
  return (
    <FlatList
      ListEmptyComponent={<Text>No Recommended Movies</Text>}
      data={movies}
      horizontal={true}
      contentContainerStyle={styles.contentContainer}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <View style={styles.movieCardWrapper}>
          <MovieCard
            movieDetails={item}
            height={320}
            width={150}
            posterHeight={230}
          />
        </View>
      )}
      keyExtractor={item => item.movieId}
    />
  );
}
