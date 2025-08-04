import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = () => {
  return (
    <View 
      className={`bg-[#1F1B1B] flex-row items-center px-4 w-full`}
      style={{ height: 85 }}
    >
      {/* Avatar and Text Container */}
      <View 
        className="flex-row items-center left-2 top-2"
        style={{ width: 210, height: 45 }}
      >
        {/* Avatar */}
        <View className="w-[45px] h-[45px] rounded-full overflow-hidden justify-center items-center border-[1px] border-[#4774AD] bg-[#1F1B1B]">          
            <Image 
              source={require('../../assets/headerPic.png')}
              className="w-[41px] h-[41px] justify-center items-center"
              style={{ resizeMode: 'contain' }}
              onError={(error) => console.log('Image load error:', error)}
              onLoad={() => console.log('Image loaded successfully')}
            />
        </View>
        
        {/* Text Content */}
        <View className="flex-1 mt-2 ml-3">
          <Text className="text-white" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, lineHeight: 12.32, letterSpacing: 0 }}>
            Noam Penn (Panther)
          </Text>
          <Text style={{ fontFamily: 'Poppins', color: '#B0AAAA', fontSize: 12, fontWeight: '400', marginTop: -2 }}>a tennis player</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
