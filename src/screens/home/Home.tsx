import { useEffect, useMemo } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';

import MovieCard from '@components/movieCard';
import { useMovies } from '@hooks/useMovies';
import { fetchFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';
import { formatMovieData } from '@utils/helpers';

import { styles } from './styles';

export default function Home() {
  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  useEffect(() => {
    fetchFavourites();
  }, []);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
  } = useMovies({
    sortBy: 'popularity.desc',
    includeVideo: false,
    language: 'en-US',
  });

  const movies = useMemo(
    () => formatMovieData(data ?? [], isFavourite),
    [data, favMovieIds],
  );

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isError) {
    Alert.alert('Error while getting movies!', error.message, [{ text: 'OK' }]);
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <FlatList
      data={movies}
      numColumns={2}
      contentContainerStyle={styles.listContent}
      columnWrapperStyle={styles.columnWrapper}
      renderItem={({ item }) => <MovieCard movieDetails={item} />}
      keyExtractor={item => item.movieId}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={
        isFetchingNextPage ? <ActivityIndicator size="small" /> : null
      }
    />
  );
}
