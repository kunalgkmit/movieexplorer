import { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import CustomTextInput from '@components/textInput';
import CustomButton from '@components/button';
import { GENRE_SELECTION_ARRAY } from '@constants/constants';
import {
  movieRatingValidator,
  movieReleaseYearValidator,
} from '@utils/helpers';

import { styles } from './styles';

export default function FilterByOptions({
  votes,
  releaseYear,
  genre,
  setVotes,
  setReleaseYear,
  toggleFilter,
  setMovieGenre,
  setFilterHighlight,
}: FilterOptionsProps) {
  const [voteGreaterThan, setVoteGreaterThan] = useState('');
  const [movieReleaseYear, setMovieReleaseYear] = useState('');
  const [movieFilterByGenre, setMovieFilterByGenre] = useState('');

  const [errors, setErrors] = useState({
    movieRatingError: '',
    movieReleaseYearError: '',
  });

  useEffect(() => {
    if (votes !== 0) setVoteGreaterThan(votes.toString());
    if (releaseYear !== 0) setMovieReleaseYear(releaseYear.toString());
    if (genre !== '') setMovieFilterByGenre(genre);
  }, [votes, releaseYear]);

  const handleFilterSubmit = () => {
    const ratingError = movieRatingValidator(voteGreaterThan.trim());
    const releaseYearError = movieReleaseYearValidator(movieReleaseYear);

    setErrors({
      movieRatingError: ratingError,
      movieReleaseYearError: releaseYearError,
    });

    if (!ratingError || !releaseYearError) {
      const votesNum = isNaN(parseInt(voteGreaterThan))
        ? 0
        : parseInt(voteGreaterThan);
      const yearNum = isNaN(parseInt(movieReleaseYear))
        ? 0
        : parseInt(movieReleaseYear);
      setVotes(votesNum);
      setReleaseYear(yearNum);
      setMovieGenre(movieFilterByGenre);
      setFilterHighlight?.(true);
      toggleFilter();
    }

    if(!voteGreaterThan && !releaseYear && !movieFilterByGenre){
      setFilterHighlight?.(false);
    }
  };

  const clearFilters = () => {
    setVoteGreaterThan('');
    setMovieReleaseYear('');
    setMovieFilterByGenre('');

    setVotes(0);
    setReleaseYear(0);
    setMovieGenre('');

    setFilterHighlight?.(false);

    toggleFilter();
  };

  const handleGenreSelection = (genreId: string) => {
    setMovieFilterByGenre(prev => (prev === genreId ? '' : genreId));
  };

  return (
    <View style={styles.container}>
      <CustomTextInput
        onChangeText={setVoteGreaterThan}
        value={voteGreaterThan}
        placeholder="Rating greater than:"
        error={errors.movieRatingError}
      />
      <CustomTextInput
        onChangeText={setMovieReleaseYear}
        value={movieReleaseYear}
        placeholder="Enter Release Year:"
        error={errors.movieReleaseYearError}
      />
      <View style={styles.genreWrapper}>
        {GENRE_SELECTION_ARRAY.map((item, index) => {
          const isGenreSelected = movieFilterByGenre === item.genreId;
          return (
            <TouchableOpacity
              key={index}
              style={
                isGenreSelected
                  ? styles.selectedGenreButton
                  : styles.genreButton
              }
              onPress={() => handleGenreSelection(item.genreId)}
            >
              <Text
                style={
                  movieFilterByGenre === item.genreId
                    ? styles.selectedOptionText
                    : styles.text
                }
              >
                {item.genreName}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.filterButtonsWrapper}>
        <CustomButton title="Apply" onPress={handleFilterSubmit} />
        <CustomButton
          title="Clear"
          onPress={clearFilters}
          isClearFilter={true}
        />
      </View>
    </View>
  );
}
