import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const NewsCard1 = ({ title, readTime, imageSource }) => {
  return (
    <TouchableOpacity
      style={{
        width: 337,
        height: 91,
        backgroundColor: '#fafafa',
        flexDirection: 'row'
      }}
    >
      {/* Left side - Content */}
      <View style={{ 
        flex: 1, 
        padding: 12,
        justifyContent: 'space-between'
      }}>
        {/* News Label */}
        <Text className="font-regular"
          style={{
            color: '#145E94',
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: 12,
            marginBottom: 4
          }}
        >
          News
        </Text>
        
        {/* Title */}
        <Text className="font-regular"
          numberOfLines={2}
          style={{
            color: '#210C0C',
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: 14,
            lineHeight: 12,
            height: 30,
            marginBottom: 8
          }}
        >
          {title || "Lorem Ipsum is a term for a completely meaningless text - sometimes read"}
        </Text>
        
        {/* Bottom row - Read time and clock icon */}
        <View style={{ 
          flexDirection: 'row', 
          alignItems: 'center',
          justifyContent: 'flex-start'
        }}>
          <Svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <G clipPath="url(#clip0_1625_3347)">
              <Path d="M7 13.125C3.6225 13.125 0.875 10.3775 0.875 7C0.875 3.6225 3.6225 0.875 7 0.875C10.3775 0.875 13.125 3.6225 13.125 7C13.125 10.3775 10.3775 13.125 7 13.125ZM7 1.75C4.10375 1.75 1.75 4.10375 1.75 7C1.75 9.89625 4.10375 12.25 7 12.25C9.89625 12.25 12.25 9.89625 12.25 7C12.25 4.10375 9.89625 1.75 7 1.75Z" fill="#145E94"/>
              <Path d="M8.75003 9.1875C8.67128 9.1875 8.59253 9.17 8.52253 9.12625L6.33503 7.81375C6.27024 7.77481 6.21676 7.7196 6.17992 7.65359C6.14308 7.58759 6.12416 7.51309 6.12503 7.4375V3.9375C6.12503 3.6925 6.31753 3.5 6.56253 3.5C6.80753 3.5 7.00003 3.6925 7.00003 3.9375V7.1925L8.97753 8.37375C9.05898 8.42367 9.12194 8.49879 9.15685 8.58771C9.19177 8.67663 9.19674 8.77452 9.17102 8.86652C9.1453 8.95853 9.09028 9.03964 9.01431 9.09756C8.93834 9.15548 8.84556 9.18706 8.75003 9.1875Z" fill="#145E94"/>
            </G>
            <Defs>
              <ClipPath id="clip0_1625_3347">
                <Rect width="14" height="14" fill="white"/>
              </ClipPath>
            </Defs>
          </Svg>
          <Text className="font-regular mr-2"
            style={{
              color: '#B0AAAA',
              fontFamily: 'Rubik',
              fontWeight: '400',
              fontSize: 12,
              marginLeft: 6
            }}
          >
            {readTime || "an hour ago"}
          </Text>
          <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <Path d="M6.525 12.05C7.61774 12.05 8.68594 11.726 9.59452 11.1189C10.5031 10.5118 11.2113 9.64889 11.6294 8.63933C12.0476 7.62976 12.157 6.51887 11.9438 5.44713C11.7307 4.37538 11.2044 3.39092 10.4318 2.61824C9.65908 1.84555 8.67462 1.31935 7.60287 1.10616C6.53113 0.892981 5.42023 1.00239 4.41067 1.42057C3.40111 1.83874 2.53822 2.5469 1.93113 3.45548C1.32404 4.36406 1 5.43226 1 6.525C1 7.43847 1.221 8.29914 1.61389 9.05852L1 12.05L3.99148 11.4361C4.75025 11.8284 5.61215 12.05 6.525 12.05Z" stroke="#145E94" strokeLinecap="round" strokeLinejoin="round"/>
          </Svg>
          <Text className="font-regular"
            style={{
              color: '#B0AAAA',
              fontFamily: 'Rubik',
              fontWeight: '400',
              fontSize: 12,
              marginLeft: 6
            }}
          >
            {readTime || "26 comments"}
          </Text>
        </View>
      </View>
      
      {/* Right side - Image */}
      <View className="mt-2" style={{ width: 91, height: 91 }}>
        <Image 
          source={imageSource || require('../assets/news2.png')} 
          style={{ 
            width: 103, 
            height: 84, 
            borderTopRightRadius: 12,
            borderBottomRightRadius: 12,
            borderTopLeftRadius: 12,
            borderBottomLeftRadius: 12
          }}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  );
};

export default NewsCard1;
