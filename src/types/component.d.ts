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
  customStyle: any;
}

interface CustomAppBarProps {
  title: string;
  isMovieDetailsScreen?: boolean;
  isHomeScreen?: boolean;
  setSort?: () => void;
  setFilter?: () => void;
}
