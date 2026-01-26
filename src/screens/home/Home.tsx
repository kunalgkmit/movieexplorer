import MovieCard from '@components/movieCard';
import fetchMovies from '@services/movies.service';
import { useQuery } from '@tanstack/react-query';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['Movies'],
    queryFn: fetchMovies,
  });

  const movies = data?.results;
  // console.log(movies)

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
      />
    </View>
  );
}
