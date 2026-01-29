import { useMovieDetails } from '@hooks/useMovieDetails';
import { useRoute } from '@react-navigation/native';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { styles } from './styles';
import { IMAGE_BASE_URL } from '@env';
import { formatDateToReadableDate, formatMovieRating } from '@utils/helpers';
import { useRecommendedMovies } from '@hooks/useRecommendedMovies';
import { useFavMoviesStore } from '@store/favourites';
import MovieCard from '@components/movieCard';
import { useFavourites } from '@hooks/useFavourites';
import { COLORS } from '@constants/colors';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useMemo } from 'react';

export default function TaskDetailsScreen() {
  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favIds = useFavMoviesStore(state=>state.favMoviesIds);

  const { mutate: toggleFavourite, isSuccess, isPending } = useFavourites();

  const route = useRoute<TaskDetailsProps>();
  console.log(route.params?.movieId);
  const movieId = route.params?.movieId;

  const { data, isLoading } = useMovieDetails(movieId);

  const {
    data: recommendedMovies,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useRecommendedMovies(movieId);
  const flattedData = recommendedMovies?.pages
    ?.map(page => page.results)
    .flat();
  const movies = flattedData?.map(movieItem => {
    return {
      movieId: movieItem.id,
      posterPath: movieItem.poster_path,
      title: movieItem.title,
      releaseDate: movieItem.release_date,
      rating: movieItem.vote_average,
      isFavourite: isFavourite(movieItem.id),
    };
  });

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return (
      <ActivityIndicator
        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      />
    );
  }

  const formattedRating = formatMovieRating(data.vote_average);

  const formattedReleaseDate = formatDateToReadableDate(data.release_date);

  const handleFavourite = ()=>{
    toggleFavourite({ movieId, isFavourite: !isFavourite(movieId) });
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${data.backdrop_path}` }}
        style={styles.backDrop}
        resizeMode="cover"
      />
      <View style={styles.favouriteWrapper}>
        {isPending ? (
          <ActivityIndicator color={COLORS.RED} />
        ) : (
          <TouchableOpacity onPress={handleFavourite}>
            <Ionicons
              name={isFavourite(movieId) ? 'heart' : 'heart-outline'}
              size={22}
              color={COLORS.RED}
            />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.posterWrapper}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${data.poster_path}` }}
          style={styles.poster}
          resizeMode="contain"
        />
        <Text style={styles.title}>{data.title}</Text>
      </View>

      <View style={styles.detailsWrapper}>
        <Text style={styles.subtitle}>Overview</Text>
        <Text>{data.overview}</Text>
        <Text style={styles.rating}>★ {formattedRating}</Text>
        <Text style={styles.releaseDate}>{formattedReleaseDate}</Text>
      </View>
      <View style={{ padding: 10 }}>
        <Text style={styles.subtitle}>Recommended Movies</Text>
        <FlatList
          data={movies}
          horizontal={true}
          renderItem={({ item }) => <MovieCard movieDetails={item} />}
          keyExtractor={item => item.movieId}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            isFetchingNextPage ? <ActivityIndicator size="small" /> : null
          }
        />
      </View>
    </View>
  );
}
