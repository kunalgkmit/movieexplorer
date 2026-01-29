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
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '@constants/routes';

export default function MovieCard({ movieDetails }: MovieCardProps) {
  const { movieId, title, rating, posterPath, releaseDate, isFavourite } = movieDetails;

  const addFavourite = useFavMoviesStore(state => state.addFavourite);
  const removeFavourite = useFavMoviesStore(state => state.removeFavourite);


  const formattedRating = formatMovieRating(rating);

  const formattedReleaseDate = formatDateToReadableDate(releaseDate);

  const { mutate: toggleFavourite, isSuccess, isPending } = useFavourites();

  const navigation = useNavigation<StackNavProp>();

  // Add/ remove favourites when mutation of favourites is success
  useEffect(() => {
    if (isSuccess) {
      if (isFavourite) {
        removeFavourite(movieId);
      } else {
        addFavourite({ ...movieDetails, isFavourite: true });
      }
    }
  }, [isSuccess]);

  const handleFavourite = () => {
    toggleFavourite({ movieId, isFavourite: !isFavourite });
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => {navigation.push(ROUTES.STACK.MOVIE_DETAILS, {movieId})}}
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
