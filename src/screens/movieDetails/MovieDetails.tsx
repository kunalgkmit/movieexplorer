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
import { useFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';
import { COLORS } from '@constants/colors';

import { styles } from './styles';
import MovieCard from '@components/movieCard';

export default function TaskDetailsScreen() {
  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  const { mutate: toggleFavourite, isPending } = useFavourites();

  const route = useRoute<TaskDetailsProps>();
  const movieId = route.params?.movieId;

  const isMovieFavourited = movieId && isFavourite(movieId);

  const { data, isLoading } = useMovieDetails(movieId);

  const { data: recommenddMovies } = useRecommendedMovies(movieId);

  const movies = useMemo(
    () => formatMovieData(recommenddMovies ?? [], isFavourite),
    [data, favMovieIds],
  );

  if (isLoading) {
    return <ActivityIndicator style={styles.indicator} />;
  }

  const formattedRating = formatMovieRating(data.vote_average);

  const formattedReleaseDate = formatDateToReadableDate(data.release_date);

  const handleFavourite = () => {
    if (movieId)
      toggleFavourite({ movieId, isFavourite: !isFavourite(movieId) });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${data.backdrop_path}` }}
          style={styles.backDrop}
          resizeMode="cover"
        />

        <View style={styles.favouriteWrapper}>
          {isPending ? (
            <ActivityIndicator color={COLORS.RED} size={25} />
          ) : (
            <TouchableOpacity onPress={handleFavourite}>
              <Ionicons
                name={isMovieFavourited ? 'heart' : 'heart-outline'}
                size={25}
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
          <View style={styles.titleWrapper}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.rating}>★ {formattedRating}</Text>
          </View>

          <Text style={styles.releaseDate}>{formattedReleaseDate}</Text>

          <View style={styles.overviewWrapper}>
            <Text style={styles.overview}>{data.overview}</Text>
            <Text style={styles.subtitle}>Recommended Movies</Text>
          </View>

          <FlatList
            ListEmptyComponent={<Text>Recommended Movies not found</Text>}
            data={movies}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingTop: 15 }}
            renderItem={({ item }) => (
              <View style={styles.movieCardWrapper}>
                <MovieCard movieDetails={item} height={340} width={150} />
              </View>
            )}
            keyExtractor={item => item.movieId}
          />
        </View>
      </View>
    </ScrollView>
  );
}
