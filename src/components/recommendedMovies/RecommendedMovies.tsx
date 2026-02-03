import { FlatList, Text, View } from 'react-native';
import { useRecommendedMovies } from '@hooks/useRecommendedMovies';
import MovieCard from '@components/movieCard';

import { styles } from './styles';

export default function RecommendedMovies({movieId}: {movieId?:number}) {

  const { data: recommendedMovies } = useRecommendedMovies(movieId);

  return (
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
