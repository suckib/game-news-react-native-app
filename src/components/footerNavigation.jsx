import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const FooterNavigation = ({ activeTab = 'Game board' }) => {
  return (
    <View 
      className="bg-[#1F1B1B] flex-row items-center w-full"
      style={{ height: 78 }}
    >
      {/* Register */}
      <TouchableOpacity className="items-center justify-center flex w-[calc(25vw)]">
        <View className="mb-1">
          <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
            <Path 
              d="M10.1137 19.5477C15.2066 19.5477 19.3349 15.3958 19.3349 10.2738C19.3349 5.1519 15.2066 1 10.1137 1C5.02089 1 0.892578 5.1519 0.892578 10.2738C0.892578 15.3958 5.02089 19.5477 10.1137 19.5477Z" 
              stroke={activeTab === 'Register' ? '#FFFFFF' : '#777777'}
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            <Path 
              d="M16.174 3.28296C13.7147 7.48401 13.7147 12.2999 16.174 17.2642M4.05371 3.28296C6.51299 7.48401 6.51299 12.2999 4.05371 17.2642" 
              stroke={activeTab === 'Register' ? '#FFFFFF' : '#777777'}
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
          </Svg>
        </View>
        <Text 
          className="text-center font-regular"
          style={{ 
            color: activeTab === 'Register' ? '#FFFFFF' : '#777777',
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: 14
          }}
        >
          Register
        </Text>
      </TouchableOpacity>

      {/* Game board */}
      <TouchableOpacity className="items-center justify-center flex w-[calc(25vw)]">
        <View className="mb-1">
          <Svg width="20" height="21" viewBox="0 0 20 21" fill="none">
            <Path 
              d="M5.26758 0.0996094V1.68066H14.9775V0.0996094H16.2178V1.68066H17.1826C18.3106 1.68075 19.2441 2.69097 19.2441 3.95215V8.60938L18.0029 10.1152V7.33008H2.24219V17.8623C2.24219 18.3444 2.60158 18.7529 3.0625 18.7529H10.0654L11.3877 20.1338H3.0625C1.93453 20.1337 1.00098 19.1235 1.00098 17.8623V3.95215C1.00098 2.69095 1.93453 1.68071 3.0625 1.68066H4.02734V0.0996094H5.26758ZM19.2041 13.3389L13.6934 20.0703L10.1543 16.373L11.0156 15.3799L13.5469 18.0234L13.625 18.1055L13.6963 18.0176L18.2744 12.4238L19.2041 13.3389ZM7.86133 15.5127V16.8936H6.62012V15.5127H7.86133ZM4.97949 15.5127V16.8936H3.73926V15.5127H4.97949ZM13.625 12.3506V13.7314H12.3838V12.3506H13.625ZM10.7432 12.3506V13.7314H9.50195V12.3506H10.7432ZM7.86133 12.3506V13.7314H6.62012V12.3506H7.86133ZM4.97949 12.3506V13.7314H3.73926V12.3506H4.97949ZM16.5059 9.18945V10.5703H15.2656V9.18945H16.5059ZM13.625 9.18945V10.5703H12.3838V9.18945H13.625ZM10.7432 9.18945V10.5703H9.50195V9.18945H10.7432ZM7.86133 9.18945V10.5703H6.62012V9.18945H7.86133ZM4.97949 9.18945V10.5703H3.73926V9.18945H4.97949ZM3.0625 3.06152C2.60158 3.06157 2.24219 3.47008 2.24219 3.95215V5.94922H18.0029V3.95215C18.0029 3.47011 17.6435 3.06161 17.1826 3.06152H16.2178V4.64258H14.9775V3.06152H5.26758V4.64258H4.02734V3.06152H3.0625Z" 
              fill={activeTab === 'Game board' ? '#FFFFFF' : '#777777'}
              stroke="#1F1B1B"
              strokeWidth="0.2"
            />
          </Svg>
        </View>
        <Text 
          className="text-center font-regular"
          style={{ 
            color: activeTab === 'Game board' ? '#FFFFFF' : '#777777',
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: 14
          }}
        >
          Game board
        </Text>
      </TouchableOpacity>

      {/* Rank */}
      <TouchableOpacity className="items-center justify-center flex w-[calc(25vw)]">
        <View className="mb-1">
          <Svg width="26" height="21" viewBox="0 0 26 21" fill="none">
            <Path 
              d="M8.28711 0.25H1.65625C0.886231 0.250076 0.256836 0.881262 0.256836 1.65918V19.1191C0.256836 19.2561 0.252889 19.3796 0.249023 19.4893C0.245098 19.6006 0.241177 19.6933 0.240234 19.7764C0.238256 19.9517 0.252523 20.0293 0.272461 20.0693C0.280668 20.0858 0.297967 20.1173 0.40625 20.1465C0.52663 20.1789 0.718738 20.1963 1.0293 20.1963H1.03125L23.9258 20.3281C24.8402 20.3277 25.5868 19.5794 25.5869 18.6562V12.1904C25.5867 11.4126 24.9575 10.7822 24.1875 10.7822H17.6367V7.66016C17.6367 6.88221 17.0074 6.25101 16.2373 6.25098H9.68652V1.65918C9.68652 0.881247 9.05715 0.250051 8.28711 0.25ZM24.1074 18.8379H17.6367V12.2725H24.1074V18.8379ZM16.1572 18.8379H9.68652V7.74219H16.1572V18.8379ZM8.20703 18.8379H1.73633V1.74023H8.20703V18.8379Z" 
              fill={activeTab === 'Rank' ? '#FFFFFF' : '#777777'}
              stroke="#1F1B1B"
              strokeWidth="0.5"
            />
          </Svg>
        </View>
        <Text 
          className="text-center font-regular"
          style={{ 
            color: activeTab === 'Rank' ? '#FFFFFF' : '#777777',
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: 14
          }}
        >
          Rank
        </Text>
      </TouchableOpacity>

      {/* News */}
      <TouchableOpacity className="items-center justify-center flex w-[calc(25vw)]">
        <View className="mb-1">
          <Svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <Path 
              d="M1.16016 1V16.4915C1.16016 17.0785 1.39204 17.6414 1.80479 18.0564C2.21755 18.4715 2.77736 18.7046 3.36108 18.7046H18.7676C19.3513 18.7046 19.9111 18.4715 20.3239 18.0564C20.7366 17.6414 20.9685 17.0785 20.9685 16.4915V5.42615H16.5667" 
              stroke={activeTab === 'News' ? '#FFFFFF' : '#777777'}
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
            <Path 
              d="M1.16016 1H16.5667V16.4915C16.5667 17.0785 16.7985 17.6414 17.2113 18.0564C17.624 18.4715 18.1839 18.7046 18.7676 18.7046M12.1648 5.42615H5.56201M12.1648 9.85231H7.76294" 
              stroke={activeTab === 'News' ? '#FFFFFF' : '#777777'}
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              fill="none"
            />
          </Svg>
        </View>
        <Text 
          className="text-center font-regular"
          style={{ 
            color: activeTab === 'News' ? '#FFFFFF' : '#777777',
            fontFamily: 'Rubik',
            fontWeight: '400',
            fontSize: 14
          }}
        >
          News
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default FooterNavigation;
