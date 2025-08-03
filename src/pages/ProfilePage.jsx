import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';

const ProfilePage = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Profile" subtitle="User Profile Information" />
      
      <ScrollView className="flex-1">
        <View className="p-4">
          <Card>
            <View className="items-center mb-4">
              <View className="w-24 h-24 bg-blue-500 rounded-full items-center justify-center mb-3">
                <Text className="text-white text-2xl font-bold">JD</Text>
              </View>
              <Text className="text-xl font-bold text-gray-800">John Doe</Text>
              <Text className="text-gray-500">React Native Developer</Text>
            </View>
          </Card>

          <Card title="Personal Information">
            <View className="space-y-3">
              <View className="flex-row justify-between">
                <Text className="text-gray-600 font-medium">Email:</Text>
                <Text className="text-gray-800">john.doe@example.com</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600 font-medium">Phone:</Text>
                <Text className="text-gray-800">+1 (555) 123-4567</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600 font-medium">Location:</Text>
                <Text className="text-gray-800">San Francisco, CA</Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-gray-600 font-medium">Member Since:</Text>
                <Text className="text-gray-800">January 2024</Text>
              </View>
            </View>
          </Card>

          <Card title="Skills">
            <View className="flex-row flex-wrap">
              {['React Native', 'JavaScript', 'TypeScript', 'Node.js', 'MongoDB'].map((skill, index) => (
                <View key={index} className="bg-blue-100 rounded-full px-3 py-1 m-1">
                  <Text className="text-blue-800 text-sm">{skill}</Text>
                </View>
              ))}
            </View>
          </Card>

          <Card>
            <Button 
              title="Go Back" 
              onPress={handleGoBack}
              variant="secondary"
            />
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfilePage;
