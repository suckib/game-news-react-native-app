import React from 'react';
import { View, Text, ScrollView } from 'react-native';


const Chat = ({ navigation }) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <View className="flex-1 bg-gray-100">
      
      <ScrollView className="flex-1">
        
      </ScrollView>
    </View>
  );
};

export default Chat;
