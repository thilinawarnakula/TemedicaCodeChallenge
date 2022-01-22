import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HOME_SCREEN } from './NavigationConstants';

import MainMenuPage from '../pages/mainMenuPage/index.component';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={HOME_SCREEN.MAIN_MENU}
    >
      <Stack.Screen
        name={HOME_SCREEN.MAIN_MENU}
        component={MainMenuPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
