import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import { COLORS } from '@constants/colors';
import { styles } from './styles';

export default function FavouriteButton({
  isPending,
  isFavourite,
  handleFavourite,
  customStyle,
}: FavButtonProps) {
  return (
    <View style={customStyle || styles.favouriteWrapper}>
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
  );
}
