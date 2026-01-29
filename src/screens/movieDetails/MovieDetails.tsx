import { useMemo } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useRoute } from '@react-navigation/native';

import { IMAGE_BASE_URL } from '@env';
import {
  formatDateToReadableDate,
  formatMovieData,
  formatMovieRating,
} from '@utils/helpers';
import { useRecommendedMovies } from '@hooks/useRecommendedMovies';
import { useMovieDetails } from '@hooks/useMovieDetails';
import { useFavMoviesStore } from '@store/favourites';
import MovieCard from '@components/movieCard';
import { useFavourites } from '@hooks/useFavourites';
import { COLORS } from '@constants/colors';

import { styles } from './styles';

export default function TaskDetailsScreen() {
  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  const { mutate: toggleFavourite, isSuccess, isPending } = useFavourites();

  const route = useRoute<TaskDetailsProps>();
  const movieId = route.params?.movieId;

  const { data, isLoading } = useMovieDetails(movieId);

  const {
    data: recommenddMovies,
    hasNextPage,
    isFetchingNextPage,
    fetchNextPage,
  } = useRecommendedMovies(movieId);

  const movies = useMemo(
    () => formatMovieData(recommenddMovies ?? [], isFavourite),
    [data, favMovieIds],
  );

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

  const handleFavourite = () => {
    if (movieId)
      toggleFavourite({ movieId, isFavourite: !isFavourite(movieId) });
  };

  return (
    <ScrollView>
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
        </View>

        <View style={styles.detailsWrapper}>
          <Text style={styles.title}>{data.title}</Text>
          <Text>{data.overview}</Text>
          <Text style={styles.rating}>★ {formattedRating}</Text>
          <Text style={styles.releaseDate}>{formattedReleaseDate}</Text>
        </View>
          <Text style={styles.subtitle}>Recommended Movies</Text>
          <FlatList
            data={movies}
            numColumns={2}
            contentContainerStyle={{paddingTop:10}}
            columnWrapperStyle={{justifyContent:'space-around'}}
            renderItem={({ item }) => <MovieCard movieDetails={item} />}
            keyExtractor={item => item.movieId}
            onEndReached={loadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
              isFetchingNextPage ? <ActivityIndicator size="small" /> : null
            }
          />
        </View>
      </ScrollView>
  );
}
