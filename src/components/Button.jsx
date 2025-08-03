import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title, onPress, variant = 'primary', className = '' }) => {
  const baseClasses = 'px-6 py-3 rounded-lg items-center justify-center';
  const variantClasses = {
    primary: 'bg-blue-500',
    secondary: 'bg-gray-500',
    success: 'bg-green-500',
    danger: 'bg-red-500'
  };
  
  const textClasses = 'text-white font-semibold text-base';

  return (
    <TouchableOpacity 
      onPress={onPress}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <Text className={textClasses}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
