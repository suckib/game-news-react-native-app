import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const GameCard = ({ 
  location = "Yarkon Park, Tel Aviv | Court #2",
  date = "02/24/2023",
  time = "14:00",
  messages = "26 messages",
  player1 = { name: "Mandler T.", nickname: "PRO", avatar: null },
  player2 = { name: "Oz Y.", nickname: "The Wiz", avatar: null },
  precipitation = "25%",
  weather = "cloudy"
}) => {
  return (
    <View 
      className="bg-white rounded-lg shadow-lg"
      style={{ width: 350, height: 238 }}
    >
      {/* Header Section */}
      <View className="px-4 pt-4 pb-3">
        <View className="flex-row justify-between items-start">
          <Text className="text-[#4774AD] text-lg font-semibold flex-1">
            {location}
          </Text>
          <TouchableOpacity className="ml-2">
            <Text className="text-[#4774AD] text-xl">⚬⚬⚬</Text>
          </TouchableOpacity>
        </View>
        
        {/* Date, Time, Messages */}
        <View className="flex-row items-center mt-2 space-x-4">
          <View className="flex-row items-center">
            <Text className="text-gray-500 text-sm">📅 {date}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-gray-500 text-sm">🕐 {time}</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-gray-500 text-sm">💬 {messages}</Text>
          </View>
        </View>
      </View>

      {/* Players Section */}
      <View className="px-4 py-3">
        <View className="flex-row items-center justify-between">
          {/* Player 1 */}
          <View className="items-center">
            <View className="w-16 h-16 rounded-full border-2 border-[#4774AD] mb-2 overflow-hidden">
              {player1.avatar ? (
                <Image source={player1.avatar} className="w-full h-full" style={{ resizeMode: 'cover' }} />
              ) : (
                <View className="w-full h-full bg-gray-200 items-center justify-center">
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/64x64/cccccc/666666?text=M' }}
                    className="w-full h-full"
                    style={{ resizeMode: 'cover' }}
                  />
                </View>
              )}
              {/* Brazil Flag */}
              <View className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border border-white">
                <Text className="text-xs">🇧🇷</Text>
              </View>
            </View>
            <Text className="text-black font-semibold text-sm">{player1.name}</Text>
            <Text className="text-gray-500 text-xs">({player1.nickname})</Text>
          </View>

          {/* VS */}
          <Text className="text-[#4774AD] text-xl font-bold mx-4">vs.</Text>

          {/* Player 2 */}
          <View className="items-center">
            <View className="w-16 h-16 rounded-full border-2 border-[#4774AD] mb-2 overflow-hidden">
              {player2.avatar ? (
                <Image source={player2.avatar} className="w-full h-full" style={{ resizeMode: 'cover' }} />
              ) : (
                <View className="w-full h-full bg-gray-200 items-center justify-center">
                  <Image 
                    source={{ uri: 'https://via.placeholder.com/64x64/cccccc/666666?text=O' }}
                    className="w-full h-full"
                    style={{ resizeMode: 'cover' }}
                  />
                </View>
              )}
              {/* Brazil Flag */}
              <View className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-green-500 border border-white">
                <Text className="text-xs">🇧🇷</Text>
              </View>
            </View>
            <Text className="text-black font-semibold text-sm">{player2.name}</Text>
            <Text className="text-gray-500 text-xs">({player2.nickname})</Text>
          </View>

          {/* Additional Players */}
          <View className="items-center">
            <View className="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 mb-2 items-center justify-center">
              <Text className="text-gray-400 text-3xl">+</Text>
            </View>
            <Text className="text-gray-400 text-sm">player</Text>
            <Text className="text-gray-400 text-xs">(nickname)</Text>
          </View>

          <View className="items-center">
            <View className="w-16 h-16 rounded-full border-2 border-dashed border-gray-400 mb-2 items-center justify-center">
              <Text className="text-gray-400 text-3xl">+</Text>
            </View>
            <Text className="text-gray-400 text-sm">player</Text>
            <Text className="text-gray-400 text-xs">(nickname)</Text>
          </View>
        </View>
      </View>

      {/* Bottom Section */}
      <View className="px-4 pb-4 flex-row justify-between items-end">
        {/* Weather Info */}
        <View>
          <View className="flex-row items-center mb-1">
            <Text className="text-[#4774AD] text-sm">💧 {precipitation} Precipitation</Text>
          </View>
          <View className="flex-row items-center">
            <Text className="text-gray-500 text-sm">☁️ Weather - {weather}</Text>
          </View>
        </View>

        {/* Chat Button */}
        <TouchableOpacity 
          className="bg-[#4774AD] px-6 py-3 rounded-lg"
          style={{ minWidth: 80 }}
        >
          <Text className="text-white font-semibold text-center">Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameCard;
