import { ActivityIndicator, Alert, FlatList, View } from 'react-native';

import MovieCard from '@components/movieCard';
import { styles } from './styles';
import { useMovies } from '@hooks/useMovies';

export default function Home() {
  
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

  const movies = data?.pages?.map(page => page.results).flat() ?? [];

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
            posterPath={item.poster_path}
            title={item.title}
            releaseDate={item.release_date}
            rating={item.vote_average}
          />
        )}
        keyExtractor={item => item.id}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? (
              <ActivityIndicator size="small" />
          ) : null
        }
      />
    </View>
  );
}
