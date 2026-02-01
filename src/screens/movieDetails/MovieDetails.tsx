import { useMemo } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Ionicons from '@react-native-vector-icons/ionicons';

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
import MovieCard from '@components/movieCard';
import FavouriteButton from '@components/favouriteButton';
import CustomActivityIndicator from '@components/customActivityIndicator';
import { COLORS } from '@constants/colors';
import { sampleBackdrop, sampleImgUrl } from '@constants/constants';

import { styles } from './styles';

export default function MovieDetailsScreen() {
  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  const { mutate: toggleFavourite, isPending } = useFavourites();

  const navigation = useNavigation<StackNavProp>();

  const route = useRoute<MovieDetailsProps>();
  const movieId = route.params?.movieId;

  const isMovieFavourited = movieId ? isFavourite(movieId) : false;

  const { data, isLoading } = useMovieDetails(movieId);

  const { data: recommendedMovies } = useRecommendedMovies(movieId);

  const movies = useMemo(
    () => formatMovieData(recommendedMovies ?? [], isFavourite),
    [recommendedMovies, favMovieIds],
  );

  const handleFavourite = () => {
    if (movieId)
      toggleFavourite({ movieId, isFavourite: !isFavourite(movieId) });
  };

  if (isLoading) {
    return <CustomActivityIndicator color={COLORS.SHADOW} />;
  }

  const formattedRating = formatMovieRating(data.vote_average);

  const formattedReleaseDate = data.release_date
    ? formatDateToReadableDate(data.release_date)
    : 'Date not found';

  const backDropUrl = data.backdrop_path
    ? `${IMAGE_BASE_URL}${data.backdrop_path}`
    : sampleBackdrop;

  const posterUrl = data.poster_path
    ? `${IMAGE_BASE_URL}${data.poster_path}`
    : sampleImgUrl;

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <View style={styles.container}>
          <Image
            source={{ uri: backDropUrl }}
            style={styles.backDrop}
            resizeMode="cover"
          />
          <View style={styles.buttonWrapper}>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color={COLORS.BG_SURFACE}
              />
            </TouchableOpacity>

            <FavouriteButton
              isPending={isPending}
              isFavourite={isMovieFavourited}
              handleFavourite={handleFavourite}
              customStyle={styles.favouriteWrapper}
            />
          </View>

          <View style={styles.posterWrapper}>
            <Image
              source={{ uri: posterUrl }}
              style={styles.poster}
              resizeMode="contain"
            />
          </View>

          <View style={styles.detailsWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={styles.title}>{data.title}</Text>
              <View style={styles.ratingWrapper}>
                <Text style={styles.star}>★ </Text>
                <Text style={styles.rating}>{formattedRating}</Text>
              </View>
            </View>

            <Text style={styles.releaseDate}>{formattedReleaseDate}</Text>

            <View style={styles.overviewWrapper}>
              <Text style={styles.overview}>{data.overview}</Text>
            </View>
          </View>
          <View style={styles.listWrapper}>
            <View style={styles.recommendedText}>
              <Text style={styles.subtitle}>Recommended Movies</Text>
            </View>
            <FlatList
              ListEmptyComponent={
                isLoading ? (
                  <CustomActivityIndicator color={COLORS.SHADOW} />
                ) : (
                  <View style={styles.recommendedText}>
                    <Text>No Recommended Movies</Text>
                  </View>
                )
              }
              data={movies}
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
          </View>
        </View>
      </ScrollView>
    </>
  );
}
