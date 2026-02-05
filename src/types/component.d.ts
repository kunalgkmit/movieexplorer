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

  interface CustomModalProps {
    modalName;
    isVisible: boolean;
    visible: () => void;
    children: ReactNode;
  }

  interface CustomAppBarProps {
    title: string;
    isHomeScreen?: boolean;
    setSort?: () => void;
    setFilter?: () => void;
    sortHightlight?: boolean;
    filterHighlight?: boolean;
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
}
