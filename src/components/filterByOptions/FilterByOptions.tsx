import { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import CustomTextInput from '@components/textInput';
import CustomButton from '@components/button';
import { GENRE_SELECTION_ARRAY } from '@constants/constants';
import { COLORS } from '@constants/colors';
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
      toggleFilter();
    }
  };

  const clearFilters = () => {
    setVoteGreaterThan('');
    setMovieReleaseYear('');
    setMovieFilterByGenre('');

    setVotes(0);
    setReleaseYear(0);
    setMovieGenre('');
  };

  const handleGenreSelection = (genreId: string) => {
    setMovieFilterByGenre(genreId);
  };

  const handleGenreClose = () => {
    setMovieFilterByGenre('');
    setMovieGenre('');
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
              {movieFilterByGenre === item.genreId ? (
                <TouchableOpacity onPress={handleGenreClose}>
                  <Ionicons
                    name="close-outline"
                    size={20}
                    color={COLORS.BG_SURFACE}
                  />
                </TouchableOpacity>
              ) : null}
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.filterButton}>
        <CustomButton title="Apply Filters" onPress={handleFilterSubmit} />
        <CustomButton title="Clear Filters" onPress={clearFilters} />
      </View>
    </View>
  );
}
