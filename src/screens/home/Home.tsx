import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';

import MovieCard from '@components/movieCard';
import CustomAppBar from '@components/customAppBar/CustomAppBar';
import SortByOptions from '@components/sortByOptions';
import FilterByOptions from '@components/filterByOptions/FilterByOptions';
import CustomModal from '@components/customModal';
import { SORT_OPTIONS } from '@constants/constants';
import { useMovies } from '@hooks/useMovies';
import { fetchFavourites } from '@hooks/useFavourites';
import { useFavMoviesStore } from '@store/favourites';
import { formatMovieData } from '@utils/helpers';

import { styles } from './styles';

export default function Home() {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [votes, setVotes] = useState(0);
  const [releaseYear, setReleaseYear] = useState(0);
  const [movieGenre, setMovieGenre] = useState('');

  const isFavourite = useFavMoviesStore(state => state.isFavourite);
  const favMovieIds = useFavMoviesStore(state => state.favMoviesIds);

  const [sortBy, setSortBy] = useState(SORT_OPTIONS.POPULARITY_DESC);

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
    votesGreaterThan: votes,
    releaseYear: releaseYear,
    withGenres: movieGenre,
  });
  console.log('WITH GENRE>>', movieGenre);

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
  const toggleSort = () => {
    setIsSortOpen(prev => !prev);
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(prev => !prev);
    setIsSortOpen(false);
  };

  return (
    <>
      <CustomAppBar
        title="Home"
        isHomeScreen={true}
        setSort={toggleSort}
        setFilter={toggleFilter}
      />
      <CustomModal
        modalName={'Sort '}
        visible={toggleSort}
        isVisible={isSortOpen}
      >
        <SortByOptions
          sortBy={sortBy}
          setSortBy={setSortBy}
          toggleSort={toggleSort}
        />
      </CustomModal>
      <CustomModal
        modalName={'Filter: '}
        visible={toggleFilter}
        isVisible={isFilterOpen}
      >
        <FilterByOptions
          setVotes={setVotes}
          setReleaseYear={setReleaseYear}
          setMovieGenre={setMovieGenre}
          toggleFilter={toggleFilter}
        />
      </CustomModal>
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
