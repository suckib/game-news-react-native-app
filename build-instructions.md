# APK Building Instructions for React Native App

## Method 1: EAS Build (Cloud - Recommended)

### Prerequisites
- Expo account (sign up at https://expo.dev)

### Steps
1. Login to EAS:
   ```bash
   eas login
   ```

2. Build APK:
   ```bash
   eas build --platform android --profile preview
   ```

3. Download APK from the provided link

---

## Method 2: Local Build with Android Studio

### Prerequisites
- ✅ Java JDK 17 (already installed)
- Android Studio with SDK
- Android SDK Platform Tools

### Steps
1. Install Android Studio from https://developer.android.com/studio

2. Set environment variables:
   ```powershell
   $env:ANDROID_HOME = "C:\Users\$env:USERNAME\AppData\Local\Android\Sdk"
   $env:PATH += ";$env:ANDROID_HOME\platform-tools"
   ```

3. Build APK:
   ```bash
   cd "d:\react-native app\android"
   .\gradlew assembleDebug
   ```

4. Find APK at: `android\app\build\outputs\apk\debug\app-debug.apk`

---

## VS Code Task Setup

Add to `.vscode/tasks.json`:
```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Build APK (Debug)",
      "type": "shell",
      "command": "cd android && .\\gradlew assembleDebug",
      "group": "build",
      "problemMatcher": []
    },
    {
      "label": "Build APK (Release)",
      "type": "shell", 
      "command": "cd android && .\\gradlew assembleRelease",
      "group": "build",
      "problemMatcher": []
    }
  ]
}
```

---

## App Structure Overview

Your app includes:
- ✅ News page with NewsCard1, NewsCard2, SystemMessage components
- ✅ Game page with GameCard component
- ✅ Chat functionality
- ✅ Rank and Register pages
- ✅ Bottom navigation (FooterNavigation)
- ✅ Header component
- ✅ NativeWind styling
- ✅ React Navigation
- ✅ SVG icons and LinearGradient components

## Troubleshooting

### Java Issues
- Restart PowerShell after Java installation
- Set JAVA_HOME: `$env:JAVA_HOME = "C:\Program Files\Microsoft\jdk-17.0.16.8-hotspot"`

### Gradle Issues  
- First build takes 10-15 minutes (downloading dependencies)
- Use EAS Build if local build fails

### Asset Issues
- Simplified app.json to avoid image processing errors
- Icons/splash screens can be added later
