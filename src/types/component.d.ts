interface LoginFormProps {
  title: string;
  subtitle?: string;
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  isPending?: boolean;
  isLogout?: boolean;
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
}

interface FavButtonProps {
  isPending: boolean;
  isFavourite: boolean | undefined;
  handleFavourite: () => void;
  customStyle?: any;
}

interface CustomAppBarProps {
  title: string;
  isMovieDetailsScreen?: boolean;
  isHomeScreen?: boolean;
  setSort?: () => void;
  setFilter?: () => void;
}

interface CustomModalProps {
  modalName;
  isVisible: boolean;
  visible: () => void;
  children: ReactNode;
}

interface SortByProps {
  sortBy: string,
  setSortBy: (params: string) => void;
  toggleSort: () => void;
}

interface SortType {
  sortName: string;
  sortOption: string;
}