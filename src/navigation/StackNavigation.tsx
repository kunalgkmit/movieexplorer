import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ROUTES } from '@constants/routes';
import { MyTabs } from './BottomTabs';
import TaskDetailsScreen from '@screens/movieDetails/MovieDetails';

const Stack = createNativeStackNavigator<StackNavTypes>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.STACK.BOTTOM_TABS}
        component={MyTabs}
      />
      <Stack.Screen
        name={ROUTES.STACK.MOVIE_DETAILS}
        component={TaskDetailsScreen}
      />
    </Stack.Navigator>
  );
}