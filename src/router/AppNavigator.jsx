import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import pages
import Game from '../pages/game';
import Chat from '../pages/chat';
import SettingsPage from '../pages/SettingsPage';

const Stack = createNativeStackNavigator();

// Main App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Game" component={Game} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Settings" component={SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
