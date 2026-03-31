import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import StackNavigator from './src/navigation/StackNavigator';
import AddGameScreen from './src/screens/AddGameScreen';
import GamingNewsScreen from './src/screens/GamingNewsScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // change icons dynamically based on the focused tab
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Catalogo') {
              iconName = focused
                ? 'game-controller'
                : 'game-controller-outline';
            } else if (route.name === 'Agregar') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Noticias') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#6C63FF',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="Catalogo"
          component={StackNavigator}
          options={{ title: 'Catálogo' }}
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
