import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomBottomTab from '@components/customBottomTab/CustomBottomTab';
import { ROUTES } from '@constants/routes';
import Favourites from '@screens/favourites/Favourites';
import Home from '@screens/home/Home';
import Profile from '@screens/profile/Profile';

const Tab = createBottomTabNavigator<BottomTabNavTypes>();

export const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomBottomTab {...props} />}
    >
      <Tab.Screen name={ROUTES.TABS.HOME} component={Home} />
      <Tab.Screen name={ROUTES.TABS.FAVOURITES} component={Favourites} />
      <Tab.Screen name={ROUTES.TABS.PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};
