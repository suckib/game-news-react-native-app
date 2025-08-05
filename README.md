# React Native App with NativeWind

A React Native application built with Expo and styled with NativeWind (Tailwind CSS for React Native).

## 🚀 Features

- **Expo**: React Native development platform
- **NativeWind**: Tailwind CSS styling for React Native
- **React Navigation**: Navigation between screens
- **Proper Folder Structure**: Organized components, pages, and router
- **Bottom Tab Navigation**: Easy navigation between main sections
- **Responsive Design**: Tailwind CSS classes for consistent styling

## 📁 Project Structure

```
src/
├── assets/
├── components/          # Reusable UI components
│   ├── footerNavigation.jsx
│   ├── gameCard.jsx
│   ├── Header.jsx
│   ├── newscard1.jsx
│   ├── newscard2.jsx
│   ├── systemMessage.jsx
│   └── index.js
├── pages/              # Screen components
│   ├── chat.jsx
│   ├── game.jsx
│   ├── news.jsx
│   └── index.js
└── router/             # Navigation configuration
    └── AppNavigator.jsx
```

## 🛠️ Installation

1. Make sure you have Node.js installed
2. Install dependencies:
   ```bash
   npm install
   ```

## 🎯 Running the App

### Development Server
```bash
npm start
```

### Run on Android Device
1. Install the Expo Go app on your Android device
2. Make sure your device and computer are on the same network
3. Run: `npm run android` or scan the QR code with Expo Go
4. Or run: `npm start` then press 'a' for Android

### Run on iOS (if you have a Mac)
```bash
npm run ios
```

### Run on Web
```bash
npm run web
```

## 📱 Available Screens

- **Game**
- **Chat**
- **News**

## 🎨 Styling

This app uses NativeWind, which allows you to use Tailwind CSS classes directly in React Native components. Examples:

```jsx
<View className="flex-1 bg-gray-100">
  <Text className="text-xl font-bold text-blue-600">Hello World</Text>
  <TouchableOpacity className="bg-blue-500 px-4 py-2 rounded-lg">
    <Text className="text-white">Button</Text>
  </TouchableOpacity>
</View>
```

## 📋 Available Scripts

- `npm start`: Start the Expo development server
- `npm run android`: Start the app on Android device/emulator
- `npm run ios`: Start the app on iOS simulator (Mac only)
- `npm run web`: Start the app in web browser

## 🔧 Dependencies

- **expo**: React Native development platform
- **react-navigation**: Navigation library
- **nativewind**: Tailwind CSS for React Native
- **react-native-reanimated**: Animation library
- **react-native-safe-area-context**: Safe area handling

## 📝 Notes

- Make sure your Android device has USB debugging enabled if connecting via USB
- For wireless connection, ensure both devices are on the same Wi-Fi network
- The app uses Expo Go for development - no need to install Android Studio for basic development

## 🚀 Deployment

To build for production, you can use Expo's build services or eject to native code. Refer to Expo documentation for detailed deployment instructions.
