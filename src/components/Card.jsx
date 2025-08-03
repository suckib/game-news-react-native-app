import React from 'react';
import { View, Text } from 'react-native';

const Card = ({ title, children, className = '' }) => {
  return (
    <View className={`bg-white rounded-lg shadow-lg p-4 m-2 ${className}`}>
      {title && (
        <Text className="text-lg font-bold text-gray-800 mb-2">{title}</Text>
      )}
      {children}
    </View>
  );
};

export default Card;
