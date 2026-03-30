import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import StackNavigator from './src/navigation/StackNavigator';
import AddGameScreen from './src/screens/AddGameScreen';
import GamingNewsScreen from './src/screens/GamingNewsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Catalogo"
          component={StackNavigator}
          options={{
            title: 'Catálogo',
            headerShown: false,
          }}
        />

        <Tab.Screen
          name="Agregar"
          component={AddGameScreen}
          options={{ title: 'Agregar Juego' }}
        />

        <Tab.Screen
          name="Noticias"
          component={GamingNewsScreen}
          options={{ title: 'Noticias' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
