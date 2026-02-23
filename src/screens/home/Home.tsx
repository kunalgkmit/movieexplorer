import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, Text, View } from 'react-native';

import MovieCard from '@components/movieCard';
import CustomAppBar from '@components/customAppBar';
import { useMovies } from '@hooks/useMovies';
import { fetchFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';
import { SORT_OPTIONS } from '@constants/constants';
import SortByOptions from '@components/sortByOptions';
import CustomModal from '@components/customModal';
import { formatMovieData } from '@utils/helpers';

import { styles } from './styles';
import { useSelector } from 'react-redux';
import { store } from 'reduxStore/store';

export default function Home() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sortHighlight, setSortHighlight] = useState(false);
  const [filterHighlight, setFilterHighlight] = useState(false);

  const [votes, setVotes] = useState(0);
  const [releaseYear, setReleaseYear] = useState(0);
  const [movieGenre, setMovieGenre] = useState('');

  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  const [sortBy, setSortBy] = useState(SORT_OPTIONS.POPULARITY_DESC);

  const fullName = useSelector(state=>state.profile.fullName);

  const unsubscribe = store.subscribe(()=>{
    console.log("DYAUMMMMMMM>>>>>", store.getState());
  })
  unsubscribe();

  useEffect(() => {
    fetchFavourites();
  }, []);

  const {
    data,
    isLoading,
    getNextPageData,
    // isFetchingNextPage,
    // hasNextPage,
    // fetchNextPage,
    isFetching,
    isError,
    error,
    page,
  } = useMovies({
    sortBy: sortBy,
    includeVideo: false,
    language: 'en-US',
    votesGreaterThan: votes,
    releaseYear: releaseYear,
    withGenres: movieGenre,
  });

  // console.log('CHECK FINAL ARRAY>>', data);

  const movies = useMemo(
    () => formatMovieData(data ?? [], isFavourite),
    [data, favMovieIds],
  );

  if (isError) {
    Alert.alert('Error while getting movies!', error?.message, [
      { text: 'OK' },
    ]);
  }

  const toggleSort = () => {
    setIsSortOpen(prev => !prev);
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
    setIsSortOpen(false);
  };

  if (isLoading && data.length === 0 && page === 1) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const onEndReached = () => {
    getNextPageData()
  };

  return (
    <>
      <CustomAppBar
        title={fullName}
        isHomeScreen={true}
        setSort={toggleSort}
        setFilter={toggleFilter}
        sortHightlight={sortHighlight}
        filterHighlight={filterHighlight}
      />
      <CustomModal
        modalName={'Sort: '}
        visible={toggleSort}
        isVisible={isSortOpen}
      >
        <SortByOptions
          sortBy={sortBy}
          setSortBy={setSortBy}
          toggleSort={toggleSort}
          setSortHighlight={setSortHighlight}
        />
      </CustomModal>
      <FlatList
        data={movies}
        ListEmptyComponent={<Text>NO DATA</Text>}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
        renderItem={({ item }) => <MovieCard movieDetails={item} />}
        keyExtractor={item => item.movieId}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          isFetching ? <ActivityIndicator size="small" /> : null
        }
      />
    </>
  );
}
