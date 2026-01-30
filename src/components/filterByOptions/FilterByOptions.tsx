import { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

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
  setMovieGenre
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
      <TextInput
        placeholder="Rating greater than:"
        value={voteGreaterThan}
        onChangeText={setVoteGreaterThan}
      />
      <TextInput
        placeholder="Enter Release Year:"
        value={movieReleaseYear}
        onChangeText={setMovieReleaseYear}
      />
      <TouchableOpacity
        onPress={() => {
          setMovieFilterByGenre('28');
        }}
      >
        <Text>Action</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          setMovieFilterByGenre('27');
        }}
      >
        <Text>Horror</Text>
      </TouchableOpacity>
      <Button title="Filter" onPress={handleFilterSubmit} />
    </View>
  );
}
