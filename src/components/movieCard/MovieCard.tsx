import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { IMAGE_BASE_URL } from '@env';
import { monthNames } from '@constants/constants';

export default function MovieCard({
  posterPath,
  title,
  releaseDate,
  rating,
}: MovieCardProps) {
  rating = parseFloat(rating.toFixed(1));

  const dateFormatter = () => {
    const releaseDateParts = releaseDate.split('-');
    const year = releaseDateParts[0];
    const monthIndex = parseInt(releaseDateParts[1]) - 1;
    const day = releaseDateParts[2];
    return `${monthNames[monthIndex]} ${day}, ${year}`;
  };
  releaseDate = dateFormatter();

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
          <Text style={styles.releaseDate}>{releaseDate}</Text>
          <Text style={styles.rating}>★ {rating}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
