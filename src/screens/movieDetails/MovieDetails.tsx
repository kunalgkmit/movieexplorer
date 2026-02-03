import { Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { IMAGE_BASE_URL } from '@env';
import { formatDateToReadableDate, formatMovieRating } from '@utils/helpers';
import { useMovieDetails } from '@hooks/useMovieDetails';
import { useFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';
import FavouriteButton from '@components/favouriteButton';
import CustomActivityIndicator from '@components/customActivityIndicator';
import RecommendedMovies from '@components/recommendedMovies';
import { COLORS } from '@constants/colors';

import { styles } from './styles';

export function ButtonWrapper({
  isPending,
  isMovieFavourited,
  handleFavourite,
}: ButtonWrapperTypes) {
  const navigation = useNavigation<StackNavProp>();

  return (
    <View style={styles.buttonWrapper}>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-outline" size={25} color={COLORS.SHADOW} />
      </TouchableOpacity>

      <FavouriteButton
        isPending={isPending}
        isFavourite={isMovieFavourited}
        handleFavourite={handleFavourite}
        customStyle={styles.favouriteWrapper}
      />
    </View>
  );
}

export default function MovieDetailsScreen() {
  const route = useRoute<MovieDetailsProps>();
  const movieId = route.params?.movieId;

  const { mutate: toggleFavourite, isPending } = useFavourites();

  const isMovieFavourited = useFavMoviesStore(state =>
    movieId ? state.isFavourite(movieId) : false,
  );

  const { data, isLoading } = useMovieDetails(movieId);

  const handleFavourite = () => {
    if (!movieId) return;

    toggleFavourite({
      movieId,
      isFavourite: !isMovieFavourited,
    });
  };

  const formattedRating = formatMovieRating(data?.vote_average);

  const formattedReleaseDate = formatDateToReadableDate(data?.release_date);

  if (isLoading) {
    return <CustomActivityIndicator color={COLORS.SHADOW} />;
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image
          source={{ uri: `${IMAGE_BASE_URL}${data.backdrop_path}` }}
          style={styles.backDrop}
          resizeMode="cover"
        />
        <ButtonWrapper
          isPending={isPending}
          isMovieFavourited={isMovieFavourited}
          handleFavourite={handleFavourite}
        />

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
            <View style={styles.ratingWrapper}>
              <Ionicons name="star" size={25} color={COLORS.ACCENT_YELLOW} />
              <Text style={[styles.ratingColor, styles.ratingContent]}>
                {formattedRating}
              </Text>
            </View>
          </View>

          <Text style={styles.releaseDate}>{formattedReleaseDate}</Text>

          <View style={styles.overviewWrapper}>
            <Text style={styles.overview}>{data.overview}</Text>
          </View>
        </View>
        <View style={styles.listWrapper}>
          <View style={styles.recommendedText}>
            <Text style={styles.title}>Recommended Movies</Text>
          </View>
          <RecommendedMovies movieId={movieId} />
        </View>
      </View>
    </ScrollView>
  );
}
