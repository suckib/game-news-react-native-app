import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import GameCard from '../components/gameCard';

const Game = ({ navigation }) => {
  const handleNavigateToProfile = () => {
    navigation.navigate('Profile');
  };

  const handleNavigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View className="flex-1 bg-[#fafafa]">
      <Header/>
      
      <ScrollView className="flex-1">
        {/* Filter Section */}
        <View className="p-4 border border-black">
          <View className="flex-row items-center justify-between border border-black">
            {/* Hamburger Menu */}
            <TouchableOpacity className="p-2 w-[31px] h-[31px] border border-black">

            </TouchableOpacity>

            {/* Date/Hour Dropdown */}
            <TouchableOpacity className="flex-1 mx-4 bg-white rounded-full px-4 py-3 shadow-sm">
              <View className="flex-row items-center justify-between">
                <Text className="text-gray-600 text-base">Date | hour...</Text>
                <Text className="text-[#4774AD] text-lg">⌄</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Game Cards */}
        <View className="px-4">
          <GameCard />
        </View>
      </ScrollView>
    </View>
  );
};

export default Game;
