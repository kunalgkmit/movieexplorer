import { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import CustomTextInput from '@components/textInput';
import CustomButton from '@components/button';

interface FilterOptionsProps {
  setVotes: (votes: number) => void;
  setReleaseYear: (releaseYear: number) => void;
  setMovieGenre: (genreId: string) => void;
  toggleFilter: () => void;
}

export default function FilterByOptions({
  setVotes,
  setReleaseYear,
  toggleFilter,
  setMovieGenre,
}: FilterOptionsProps) {
  const [voteGreaterThan, setVoteGreaterThan] = useState('');
  const [movieReleaseYear, setMovieReleaseYear] = useState('');
  const [movieFilterByGenre, setMovieFilterByGenre] = useState('');

  const handleFilterSubmit = () => {
    const votesNum = parseFloat(voteGreaterThan);
    const yearNum = parseInt(movieReleaseYear);
    setVotes(votesNum);
    setReleaseYear(yearNum);
    setMovieGenre(movieFilterByGenre);
    toggleFilter();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Movies By:</Text>

      <CustomTextInput
        onChangeText={setVoteGreaterThan}
        value={voteGreaterThan}
        placeholder="Rating greater than:"
      />
      <CustomTextInput
        onChangeText={setMovieReleaseYear}
        value={movieReleaseYear}
        placeholder="Enter Release Year:"
      />
      <View style={styles.genreWrapper}>
        <TouchableOpacity
          style={styles.genreButton}
          onPress={() => {
            setMovieFilterByGenre('28');
          }}
        >
          <Text>Action</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.genreButton}
          onPress={() => {
            setMovieFilterByGenre('27');
          }}
        >
          <Text>Horror</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterButton}>
        <CustomButton title="Filter" onPress={handleFilterSubmit} />
      </View>
    </View>
  );
}
