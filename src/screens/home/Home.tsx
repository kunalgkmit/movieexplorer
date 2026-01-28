import { useMemo } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';

import MovieCard from '@components/movieCard';
import { useMovies } from '@hooks/useMovies';
import { useFavMoviesStore } from '@store/favourites';

import { styles } from './styles';

export default function Home() {
  const favMoviesIds = useFavMoviesStore(state => state.favMoviesIds);
  const isFavourite = useFavMoviesStore(state=>state.isFavourite);

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

      return {
        movieId: movieItem.id,
        posterPath: movieItem.poster_path,
        title: movieItem.title,
        releaseDate: movieItem.release_date,
        rating: movieItem.vote_average,
        isFavourite: isFavourite(movieItem.id),
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
          <MovieCard movieDetails={item}/>
        )}
        keyExtractor={item => item.movieId}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator size="small" /> : null
        }
      />
    </View>
  );
}
