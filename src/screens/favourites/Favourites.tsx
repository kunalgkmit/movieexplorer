import { FlatList } from 'react-native';

import { useFavMoviesStore } from '@store/favourites';
import MovieCard from '@components/movieCard';
import CustomAppBar from '@components/customAppBar/CustomAppBar';
import EmptyContainer from '@components/emptyContainer';

import { styles } from './styles';

export default function Favourites() {
  const favourites = useFavMoviesStore(state => state.favourites);

  return (
    <>
      <CustomAppBar title="Favourites" />
      <FlatList
        data={favourites}
        ListEmptyComponent={<EmptyContainer />}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <MovieCard movieDetails={item} />}
        keyExtractor={item => item.movieId.toString()}
      />
    </>
  );
}
