import React, { useState } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import FooterNavigation from '../components/footerNavigation';

const News = ({ navigation }) => {


  return (
    <View className="flex-1 bg-[#fafafa]">
      <Header/>
      
      <ScrollView className="flex-1">
        
      </ScrollView>
      
      {/* Footer Navigation */}
      <FooterNavigation activeTab="News" navigation={navigation} />
    </View>
  );
};

export default News;
