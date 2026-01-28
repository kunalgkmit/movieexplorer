import { useEffect } from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { IMAGE_BASE_URL } from '@env';
import { formatMovieRating, formatDateToReadableDate } from '@utils/helpers';
import { useFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';
import { COLORS } from '@constants/colors';

import { styles } from './styles';

export default function MovieCard({
  movieId,
  posterPath,
  title,
  releaseDate,
  rating,
  isFavourite,
}: MovieCardProps) {

  const addFavourite = useFavMoviesStore(state => state.addFavourite);
  const removeFavourite = useFavMoviesStore(state => state.removeFavourite);

  const formattedRating = formatMovieRating(rating);

  const formattedReleaseDate = formatDateToReadableDate(releaseDate);

  const { mutate, isSuccess, isPending } = useFavourites();

  // Add/ remove favourites when mutation of favourites is success
  useEffect(() => {
    if (isSuccess) {
      if (isFavourite) {
        removeFavourite(movieId);
      } else {
        addFavourite(movie);
      }
    }
  }, [isSuccess]);

  const movie = {
    id: movieId,
    poster_path: posterPath,
    title: title,
    release_date: releaseDate,
    rating: rating,
  };

  const handleFavourite = () => {
    mutate({ movieId, isFavourite: !isFavourite });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {}}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${posterPath}` }}
        style={styles.poster}
        resizeMode="cover"
      />

      <View style={styles.favouriteWrapper}>
        {isPending ? (
          <ActivityIndicator color={COLORS.RED} />
        ) : (
          <TouchableOpacity onPress={handleFavourite}>
            <Ionicons
              name={isFavourite ? 'heart' : 'heart-outline'}
              size={22}
              color={COLORS.RED}
            />
          </TouchableOpacity>
        )}
      </View>
      
      <View style={styles.infoContainer}>
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>

        <View style={styles.metaRow}>
          <Text style={styles.releaseDate}>{formattedReleaseDate}</Text>
          <Text style={styles.rating}>★ {formattedRating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
function useFavMovies(arg0: (state: any) => any) {
  throw new Error('Function not implemented.');
}

