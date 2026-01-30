interface LoginFormProps {
  title: string;
  subtitle?: string;
}

interface ButtonProps {
  title: string;
  onPress: () => void;
  isPending?: boolean;
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
  isFavourite: boolean;
  handleFavourite: () => void;
}
