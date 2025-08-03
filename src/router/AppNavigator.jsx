import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';

// Import pages
import Game from '../pages/game';
import ProfilePage from '../pages/ProfilePage';
import SettingsPage from '../pages/SettingsPage';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack Navigator for Home Tab
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Game" component={Game} />
      <Stack.Screen name="Profile" component={ProfilePage} />
      <Stack.Screen name="Settings" component={SettingsPage} />
    </Stack.Navigator>
  );
};

// Simple icon component (since we're not using icon libraries)
const TabIcon = ({ focused, name }) => {
  const iconMap = {
    Home: focused ? '🏠' : '🏡',
    Profile: focused ? '👤' : '👥',
    Settings: focused ? '⚙️' : '🔧'
  };
  
  return (
    <View className="items-center justify-center">
      <Text className="text-lg">{iconMap[name]}</Text>
    </View>
  );
};

// Main App Navigator
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} name={route.name} />
          ),
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#6b7280',
          tabBarStyle: {
            backgroundColor: '#ffffff',
            borderTopWidth: 1,
            borderTopColor: '#e5e7eb',
            paddingTop: 5,
            paddingBottom: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Profile" component={ProfilePage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
