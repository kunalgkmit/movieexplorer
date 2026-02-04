import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ROUTES } from '@constants/routes';
import MovieDetailsScreen from '@screens/movieDetails/MovieDetails';
import { MyTabs } from './BottomTabs';

const Stack = createNativeStackNavigator<StackNavTypes>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.STACK.BOTTOM_TABS}
        component={MyTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={ROUTES.STACK.MOVIE_DETAILS}
        component={MovieDetailsScreen}
      />
    </Stack.Navigator>
  );
}