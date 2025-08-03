import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';

const HomePage = ({ navigation }) => {
  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleNavigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Welcome" subtitle="React Native App with NativeWind" />
      
      <ScrollView className="flex-1">
        <View className="p-4">
          <Card title="Getting Started">
            <Text className="text-gray-600 mb-4">
              This is a React Native app built with Expo and styled with NativeWind (Tailwind CSS for React Native).
            </Text>
            <Text className="text-gray-600 mb-4">
              Navigate through the app using the buttons below or the bottom tab navigation.
            </Text>
          </Card>

          <Card title="Features">
            <View className="space-y-2">
              <Text className="text-gray-600">• Expo for React Native development</Text>
              <Text className="text-gray-600">• NativeWind for Tailwind CSS styling</Text>
              <Text className="text-gray-600">• React Navigation for routing</Text>
              <Text className="text-gray-600">• Proper folder structure</Text>
              <Text className="text-gray-600">• Reusable components</Text>
            </View>
          </Card>

          <Card title="Navigation">
            <View className="space-y-3">
              <Button 
                title="Go to Profile" 
                onPress={handleNavigateToProfile}
                variant="primary"
              />
              <Button 
                title="Go to Settings" 
                onPress={handleNavigateToSettings}
                variant="secondary"
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomePage;
