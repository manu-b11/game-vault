import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GameListScreen from '../screens/GameListScreen';
import GameDetailScreen from '../screens/GameDetailScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="GameList">
      <Stack.Screen
        name="GameList"
        component={GameListScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GameDetail"
        component={GameDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
