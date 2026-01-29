import { useEffect } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { IMAGE_BASE_URL } from '@env';
import FavouriteButton from '@components/favouriteButton/FavouriteButton';
import { formatMovieRating, formatDateToReadableDate } from '@utils/helpers';
import { useFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';

import { styles } from './styles';

export default function MovieCard({ movieDetails }: MovieCardProps) {
  const { movieId, title, rating, posterPath, releaseDate, isFavourite } =
    movieDetails;

  const addFavourite = useFavMoviesStore(state => state.addFavouriteToStore);
  const removeFavourite = useFavMoviesStore(
    state => state.removeFavouriteFromStore,
  );

  const formattedRating = formatMovieRating(rating);

  const formattedReleaseDate = formatDateToReadableDate(releaseDate);

  const { mutate: toggleFavourite, isSuccess, isPending } = useFavourites();

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
      onPress={() => {}}
      activeOpacity={0.85}
    >
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${posterPath}` }}
        style={styles.poster}
        resizeMode="cover"
      />

      <FavouriteButton {...{ isPending, isFavourite, handleFavourite }} />

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
