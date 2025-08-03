import React, { useState } from 'react';
import { View, Text, ScrollView, Switch } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';

const SettingsPage = ({ navigation }) => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSync, setAutoSync] = useState(true);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const SettingRow = ({ title, subtitle, value, onValueChange, type = 'switch' }) => {
    return (
      <View className="flex-row justify-between items-center py-3 border-b border-gray-200">
        <View className="flex-1">
          <Text className="text-gray-800 font-medium">{title}</Text>
          {subtitle && <Text className="text-gray-500 text-sm mt-1">{subtitle}</Text>}
        </View>
        {type === 'switch' && (
          <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: '#767577', true: '#3b82f6' }}
            thumbColor={value ? '#ffffff' : '#f4f3f4'}
          />
        )}
        {type === 'arrow' && (
          <Text className="text-gray-400 text-lg">›</Text>
        )}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      <Header title="Settings" subtitle="App Preferences" />
      
      <ScrollView className="flex-1">
        <View className="p-4">
          <Card title="Notifications">
            <SettingRow
              title="Push Notifications"
              subtitle="Receive notifications about updates"
              value={notifications}
              onValueChange={setNotifications}
            />
            <SettingRow
              title="Email Notifications"
              subtitle="Receive email updates"
              value={true}
              onValueChange={() => {}}
            />
          </Card>

          <Card title="Appearance">
            <SettingRow
              title="Dark Mode"
              subtitle="Use dark theme"
              value={darkMode}
              onValueChange={setDarkMode}
            />
            <SettingRow
              title="Font Size"
              type="arrow"
            />
          </Card>

          <Card title="Data & Sync">
            <SettingRow
              title="Auto Sync"
              subtitle="Automatically sync data"
              value={autoSync}
              onValueChange={setAutoSync}
            />
            <SettingRow
              title="Backup Settings"
              type="arrow"
            />
          </Card>

          <Card title="About">
            <SettingRow
              title="Version"
              subtitle="1.0.0"
              type="arrow"
            />
            <SettingRow
              title="Privacy Policy"
              type="arrow"
            />
            <SettingRow
              title="Terms of Service"
              type="arrow"
            />
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

export default SettingsPage;
