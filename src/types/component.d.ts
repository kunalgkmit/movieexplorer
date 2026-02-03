import { ViewStyle } from 'react-native';

declare global {
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
    posterHeight?: number;
  }

  interface FavButtonProps {
    isPending: boolean;
    isFavourite: boolean | undefined;
    handleFavourite: () => void;
    customStyle?: ViewStyle;
  }

  interface ButtonWrapperTypes {
    isPending: boolean;
    isMovieFavourited: boolean;
    handleFavourite: () => void;
  }
}
