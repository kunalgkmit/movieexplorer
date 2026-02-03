import { FlatList, Text, View } from 'react-native';
import { useRecommendedMovies } from '@hooks/useRecommendedMovies';

import MovieCard from '@components/movieCard';

import { styles } from './styles';

export default function RecommendedMovies({ movieId }: { movieId?: number }) {
  const { data: recommendedMovies } = useRecommendedMovies(movieId);

  return (
    <>
      <View style={styles.recommendedText}>
        <Text style={styles.title}>Recommended Movies</Text>
      </View>

      <FlatList
        ListEmptyComponent={<Text>No Recommended Movies</Text>}
        data={recommendedMovies}
        horizontal={true}
        contentContainerStyle={styles.contentContainer}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.movieCardWrapper}>
            <MovieCard
              movieDetails={item}
            />
          </View>
        )}
        keyExtractor={item => item.movieId}
      />
    </>
  );
}
