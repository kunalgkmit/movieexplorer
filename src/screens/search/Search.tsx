import { useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';

import CustomAppBar from '@components/customAppBar';
import CustomTextInput from '@components/textInput';
import EmptyContainer from '@components/emptyContainer';
import MovieCard from '@components/movieCard';
import CustomActivityIndicator from '@components/customActivityIndicator';
import { COLORS } from '@constants/colors';
import { useSearchMovies } from '@hooks/useSearchMovies';
import { formatMovieData } from '@utils/helpers';
import { useFavMoviesStore } from '@store/favourites';

import { styles } from './styles';
import { useDebounce } from '@hooks/useDebounce';

export default function Search() {
  const [movieKeyword, setMovieKeyword] = useState('');

  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);
  const isFavourite = useFavMoviesStore(state => state.isFavourite);

  const debouncedValue = useDebounce(movieKeyword);

  const { data, isLoading } = useSearchMovies(debouncedValue);

  const movies = useMemo(
    () => formatMovieData(data ?? [], isFavourite),
    [data, favMovieIds],
  );

  return (
    <View style={styles.container}>
      <CustomAppBar title="Search" />
      <View style={styles.textInputWrapper}>
        <CustomTextInput
          placeholder="Search movies"
          value={movieKeyword}
          onChangeText={setMovieKeyword}
        />
      </View>
      <FlatList
        data={movies}
        ListEmptyComponent={
          !isLoading ? (
            <EmptyContainer />
          ) : (
            <CustomActivityIndicator color={COLORS.SHADOW} />
          )
        }
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <MovieCard movieDetails={item} />}
        keyExtractor={item => item.movieId.toString()}
      />
    </View>
  );
}
