import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ title, subtitle, className = '' }) => {
  return (
    <View className={`bg-blue-600 pt-12 pb-6 px-4 ${className}`}>
      <Text className="text-white text-2xl font-bold">{title}</Text>
      {subtitle && (
        <Text className="text-blue-100 text-sm mt-1">{subtitle}</Text>
      )}
    </View>
  );
};

export default Header;
