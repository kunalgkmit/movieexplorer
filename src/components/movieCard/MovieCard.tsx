import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { IMAGE_BASE_URL } from '@env';
import { dateFormatter, ratingFormatter } from '@utils/helpers';

export default function MovieCard({
  posterPath,
  title,
  releaseDate,
  rating,
}: MovieCardProps) {
  const formattedRating = ratingFormatter(rating);

  const formattedReleaseDate = dateFormatter(releaseDate);

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

