import { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  View,
} from 'react-native';

import MovieCard from '@components/movieCard';
import { useMovies } from '@hooks/useMovies';
import { fetchFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';
import { formatMovieData } from '@utils/helpers';

import { styles } from './styles';
import CustomAppBar from '@components/customAppBar/CustomAppBar';
import SortByOptions from '@components/sortByOptions';

export default function Home() {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  const [sortBy, setSortBy] = useState('popularity.desc');

  useEffect(() => {
    fetchFavourites();
  }, []);

  const {
    data,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    isError,
    error,
  } = useMovies({
    sortBy: sortBy,
    includeVideo: false,
    language: 'en-US',
  });

  const movies = useMemo(() => {
    if (data?.length === 0) return [];
    return formatMovieData(data ?? [], isFavourite);
  }, [data, favMovieIds]);
  console.log(sortBy, movies);

  const loadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isError) {
    Alert.alert('Error while getting movies!', error.message, [{ text: 'OK' }]);
  }

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  const toggleSort = ()=>{
    setIsSortOpen(prev=>!prev);
  }

  return (
    <>
      <CustomAppBar title="Home" isHomeScreen={true} setSort={toggleSort}/>
        {isSortOpen && <SortByOptions setSortBy={setSortBy} toggleSort={toggleSort}/>}
      <FlatList
        data={movies}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <MovieCard movieDetails={item} />}
        keyExtractor={item => item.movieId}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetchingNextPage ? <ActivityIndicator size="small" /> : null
        }
      />
    </>
  );
}
