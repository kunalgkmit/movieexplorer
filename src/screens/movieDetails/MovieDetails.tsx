import { useMemo } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
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
import MovieCard from '@components/movieCard';
import FavouriteButton from '@components/favouriteButton';
import CustomActivityIndicator from '@components/customActivityIndicator';

import CustomAppBar from '@components/customAppBar/CustomAppBar';
import { styles } from './styles';
import { COLORS } from '@constants/colors';

export default function MovieDetailsScreen() {
  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  const { mutate: toggleFavourite, isPending } = useFavourites();

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

  const formattedReleaseDate = formatDateToReadableDate(data.release_date);

  return (
    <>
      <CustomAppBar title={data.title} isMovieDetailsScreen={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Image
            source={{ uri: `${IMAGE_BASE_URL}${data.backdrop_path}` }}
            style={styles.backDrop}
            resizeMode="cover"
          />

          <FavouriteButton
            isPending={isPending}
            isFavourite={isMovieFavourited}
            handleFavourite={handleFavourite}
            customStyle={styles.favouriteWrapper}
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
              <Text style={styles.rating}>★ {formattedRating}</Text>
            </View>

            <Text style={styles.releaseDate}>{formattedReleaseDate}</Text>

            <View style={styles.overviewWrapper}>
              <Text style={styles.overview}>{data.overview}</Text>
              <Text style={styles.subtitle}>Recommended Movies</Text>
            </View>

            <FlatList
              ListEmptyComponent={
                isLoading ? (
                  <CustomActivityIndicator color={COLORS.SHADOW} />
                ) : (
                  <Text>No Recommended Movies</Text>
                )
              }
              data={movies}
              horizontal={true}
              contentContainerStyle={styles.contentContainer}
              showsHorizontalScrollIndicator={false}
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
    </>
  );
}
