import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './styles';
import { IMAGE_BASE_URL } from '@env';
import { formatMovieRating, formatDateToReadableDate } from '@utils/helpers';
import Ionicons from '@react-native-vector-icons/ionicons';
import { useFavMovies } from '@store/favourites';
import { useFavourites } from '@hooks/useFavourites';
import { useEffect } from 'react';

export default function MovieCard({
  movieId,
  posterPath,
  title,
  releaseDate,
  rating,
  checkFav,
}: MovieCardProps) {
  const addFavourite = useFavMovies(state => state.addFavourite);
  const removeFavourite = useFavMovies(state => state.removeFavourite);

  const formattedRating = formatMovieRating(rating);

  const formattedReleaseDate = formatDateToReadableDate(releaseDate);

  const { mutate, isSuccess, isPending } = useFavourites();

  useEffect(() => {
    if (isSuccess) {
      if (checkFav) {
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
    mutate({ movieId, isFavourite: !checkFav });
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
          <ActivityIndicator color={'red'} style={styles.favouriteStyle} />
        ) : (
          <TouchableOpacity onPress={handleFavourite}>
            <Ionicons
              name={checkFav ? 'heart' : 'heart-outline'}
              size={22}
              color={'red'}
              style={styles.favouriteStyle}
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
