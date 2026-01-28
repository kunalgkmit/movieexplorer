import { ActivityIndicator, Alert, FlatList, View } from 'react-native';

import MovieCard from '@components/movieCard';
import { styles } from './styles';
import { useMovies } from '@hooks/useMovies';
import { useFavMovies } from '@store/favourites';
import { useMemo } from 'react';

export default function Home() {
  const favMoviesIds = useFavMovies(state => state.favMoviesIds);

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

  const movies = useMemo(() => {
    const flattedData = data?.pages?.map(page => page.results).flat();

    return flattedData?.map(movieItem => {
      const findFavouriteMovie = favMoviesIds.find(fav => movieItem.id === fav);

      return {
        id: movieItem.id,
        posterPath: movieItem.poster_path,
        title: movieItem.title,
        releaseDate: movieItem.release_date,
        rating: movieItem.vote_average,
        isFav: findFavouriteMovie ? true : false,
      };
    });
  }, [favMoviesIds, data]);

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
    <View style={styles.container}>
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => (
          <MovieCard
            movieId={item.id}
            posterPath={item.posterPath}
            title={item.title}
            releaseDate={item.releaseDate}
            rating={item.rating}
            checkFav={item.isFav}
          />
        )}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}
