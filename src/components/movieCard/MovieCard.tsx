import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { IMAGE_BASE_URL } from '@env';

export default function MovieCard({
  posterPath,
  title,
  releaseDate,
  rating,
}: MovieCardProps) {
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
