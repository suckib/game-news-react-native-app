import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const Chat = ({ navigation }) => {
  const [message, setMessage] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      // Handle sending message logic here
      setMessage('');
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="bg-white px-4 py-3 border-b border-gray-200" style={{ paddingTop: 50 }}>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Text className="text-lg" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 18, color: '#145E94' }}>
              Monday, February 23 | 14:00 - Tel Aviv
            </Text>
          </View>
          <TouchableOpacity>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M9 12L15 6M15 6H10.5M15 6V10.5" stroke="#145E94" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
        
        {/* User Avatars */}
        <View className="flex-row items-center mt-3 ml-2">
          <TouchableOpacity className="mr-1" onPress={handleGoBack}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
          
          <View className="flex-row ml-2">
            {[1, 2, 3, 4].map((index) => (
              <View key={index} className="relative mr-2">
                <View className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                  <View className="w-full h-full bg-gray-400"></View>
                </View>
                {index <= 2 && (
                  <View className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border border-white"></View>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Chat Messages */}
      <ScrollView className="flex-1 px-4 py-4" showsVerticalScrollIndicator={false}>
        {/* Message 1 */}
        <View className="mb-6">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <View className="w-full h-full bg-gray-400"></View>
            </View>
            <View className="flex-1">
              <View className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <Text className="font-semibold mb-1" style={{ fontFamily: 'Rubik', fontWeight: '600', fontSize: 14, color: '#000' }}>
                  Penn N. (panther)
                </Text>
                <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#333', lineHeight: 20 }}>
                  Hey guys, thanks a lot for the impressive game, it was fun!
                </Text>
              </View>
              <Text className="text-xs mt-1 ml-3" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                20:00
              </Text>
            </View>
          </View>
        </View>

        {/* Message 2 */}
        <View className="mb-6">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <View className="w-full h-full bg-gray-400"></View>
            </View>
            <View className="flex-1">
              <View className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#333', lineHeight: 20 }}>
                  Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players
                </Text>
              </View>
              <Text className="text-xs mt-1 ml-3" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                20:00
              </Text>
            </View>
          </View>
        </View>

        {/* Message 3 */}
        <View className="mb-6">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <View className="w-full h-full bg-gray-400"></View>
            </View>
            <View className="flex-1">
              <View className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <Text className="font-semibold mb-1" style={{ fontFamily: 'Rubik', fontWeight: '600', fontSize: 14, color: '#000' }}>
                  Penn N. (panther)
                </Text>
                <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#333', lineHeight: 20 }}>
                  The dedication of the ball was stunning.
                </Text>
              </View>
              <Text className="text-xs mt-1 ml-3" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                20:00
              </Text>
            </View>
          </View>
        </View>

        {/* Message 4 */}
        <View className="mb-6">
          <View className="flex-row items-start">
            <View className="w-10 h-10 rounded-full bg-gray-300 mr-3 overflow-hidden">
              <View className="w-full h-full bg-gray-400"></View>
            </View>
            <View className="flex-1">
              <View className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                <Text className="font-semibold mb-1" style={{ fontFamily: 'Rubik', fontWeight: '600', fontSize: 14, color: '#000' }}>
                  Penn N. (panther)
                </Text>
                <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#333', lineHeight: 20 }}>
                  The dedication of the ball was stunning.
                </Text>
              </View>
              <Text className="text-xs mt-1 ml-3" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                20:00
              </Text>
            </View>
          </View>
        </View>

        {/* Message 5 - User's own message (right side) */}
        <View className="mb-6">
          <View className="flex-row items-start justify-end">
            <View className="flex-1 mr-3">
              <View className="bg-[#4A90C2] rounded-lg p-3 ml-12">
                <Text className="font-semibold mb-1" style={{ fontFamily: 'Rubik', fontWeight: '600', fontSize: 14, color: '#fff' }}>
                  Penn N. (panther)
                </Text>
                <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#fff', lineHeight: 20 }}>
                  I'm crossing my fingers that the next game will be crazy!
                </Text>
              </View>
              <View className="flex-row justify-end mt-1 mr-3">
                <Text className="text-xs" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                  20:00
                </Text>
              </View>
            </View>
            <View className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <View className="w-full h-full bg-gray-400"></View>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Input Area */}
      <View className="bg-white px-4 py-3 border-t border-gray-200">
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3">
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M12 6V18M6 12H18" stroke="#4A90C2" strokeWidth="2" strokeLinecap="round"/>
            </Svg>
          </TouchableOpacity>
          
          <View className="flex-1 flex-row items-center bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
            <TextInput
              className="flex-1"
              placeholder="Add a comment..."
              placeholderTextColor="#999"
              value={message}
              onChangeText={setMessage}
              multiline
              style={{ 
                fontFamily: 'Rubik', 
                fontWeight: '400', 
                fontSize: 14,
                color: '#333',
                maxHeight: 100
              }}
            />
          </View>
          
          <TouchableOpacity 
            className="ml-3 w-10 h-10 bg-[#4A90C2] rounded-full items-center justify-center"
            onPress={handleSendMessage}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M18 2L9 11M18 2L12 18L9 11M18 2L2 8L9 11" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;
