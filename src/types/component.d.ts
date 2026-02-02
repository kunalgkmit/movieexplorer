interface LoginFormProps {
  title: string;
  subtitle?: string;
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  isPending?: boolean;
  isLogout?: boolean;
  isClearFilter?: boolean;
}

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (data: string) => void;
  error?: string;
  editable?: boolean;
  autoCapitalize?: 'none';
  secureTextEntry?: boolean;
  isPassword?: boolean;
}

interface MovieCardProps {
  movieDetails: Movie;
  height?: number;
  width?: number;
  posterHeight?: number;
}

interface FavButtonProps {
  isPending: boolean;
  isFavourite: boolean | undefined;
  handleFavourite: () => void;
  customStyle?: any;
}

interface CustomAppBarProps {
  title: string;
  isHomeScreen?: boolean;
  setSort?: () => void;
  setFilter?: () => void;
  sortHightlight?: boolean;
  filterHighlight?: boolean;
}

interface CustomModalProps {
  modalName;
  isVisible: boolean;
  visible: () => void;
  children: ReactNode;
}

interface SortByProps {
  sortBy: string;
  setSortBy: (params: string) => void;
  toggleSort: () => void;
  setSortHighlight?: (params: boolean) => void;
}

interface SortType {
  sortName: string;
  sortOption: string;
}

interface GenreType {
  genreId: string;
  genreName: string;
}

interface FilterOptionsProps {
  votes: number;
  releaseYear: number;
  genre: string;
  setVotes: (votes: number) => void;
  setReleaseYear: (releaseYear: number) => void;
  setMovieGenre: (genreId: string) => void;
  toggleFilter: () => void;
  setFilterHighlight?: (param: boolean) => void;
}
