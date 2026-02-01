import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { ROUTES } from '@constants/routes';

declare global {
  type BottomTabNavTypes = {
    [ROUTES.TABS.HOME]: undefined;
    [ROUTES.TABS.FAVOURITES]: undefined;
    [ROUTES.TABS.PROFILE]: undefined;
    [ROUTES.TABS.SEARCH]: undefined;
  };

  type StackNavTypes = {
    [ROUTES.STACK.BOTTOM_TABS]: undefined;
    [ROUTES.STACK.MOVIE_DETAILS]: { movieId: number } | undefined;
  };

  type TabNavigationProp = BottomTabNavigationProp<BottomTabNavTypes>;
  type StackNavProp = NativeStackNavigationProp<StackNavTypes>;

  type MovieDetailsProps = RouteProp<StackNavTypes, ROUTES.STACK.MOVIE_DETAILS>;
}
