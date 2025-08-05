import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const NewsCard2 = ({ 
  location = "Yarkon Park, Tel Aviv | Court #1",
  date = "02/24/2023",
  time = "02:07",
  messages = "26 messages",
  player1 = { name: "Mandler T.", nickname: "PRO" },
  player2 = { name: "Oz Y.", nickname: "The Wiz" },
  precipitation = "25%",
  weather = "cloudy",
  navigation
}) => {
  return (
    <View 
      className="bg-white rounded-xl border border-[#EEEEEE]"
      style={{ width: 350, height: 200 }}
    >
      {/* Header Section */}
      <View className="px-4 pt-4 pb-3 border-b border-[#EEEEEE]">
        <View className="flex-row justify-between items-start">
          <Text className="flex-1 -mt-1 ml-1" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 16, color: '#210C0C' }}>
            {location}
          </Text>
          <TouchableOpacity className="ml-2">
            <Svg width="18" height="19" viewBox="0 0 18 19" fill="none">
              <G clipPath="url(#clip0_1578_3295)">
                <Path 
                  d="M14.1172 12.0177C13.0444 12.0177 12.0912 12.539 11.4973 13.3415L6.38357 10.7282C6.46936 10.4367 6.51562 10.1285 6.51562 9.80963C6.51562 9.37776 6.43096 8.96535 6.27766 8.58785L11.6371 5.36775C12.2351 6.06963 13.125 6.51562 14.1172 6.51562C15.9135 6.51562 17.375 5.05417 17.375 3.25781C17.375 1.46145 15.9135 0 14.1172 0C12.3208 0 10.8594 1.46145 10.8594 3.25781C10.8594 3.673 10.9376 4.0702 11.0798 4.43569L5.70696 7.66382C5.10941 6.98265 4.23302 6.55182 3.25781 6.55182C1.46145 6.55182 0 8.01328 0 9.80963C0 11.606 1.46145 13.0674 3.25781 13.0674C4.34817 13.0674 5.31501 12.529 5.90667 11.704L11.0055 14.3097C10.9106 14.615 10.8594 14.9394 10.8594 15.2755C10.8594 17.0719 12.3208 18.5333 14.1172 18.5333C15.9135 18.5333 17.375 17.0719 17.375 15.2755C17.375 13.4792 15.9135 12.0177 14.1172 12.0177ZM14.1172 1.08594C15.3148 1.08594 16.2891 2.06024 16.2891 3.25781C16.2891 4.45538 15.3148 5.42969 14.1172 5.42969C12.9196 5.42969 11.9453 4.45538 11.9453 3.25781C11.9453 2.06024 12.9196 1.08594 14.1172 1.08594ZM3.25781 11.9815C2.06024 11.9815 1.08594 11.0072 1.08594 9.80963C1.08594 8.61206 2.06024 7.63776 3.25781 7.63776C4.45538 7.63776 5.42969 8.61206 5.42969 9.80963C5.42969 11.0072 4.45538 11.9815 3.25781 11.9815ZM14.1172 17.4474C12.9196 17.4474 11.9453 16.4731 11.9453 15.2755C11.9453 14.0779 12.9196 13.1036 14.1172 13.1036C15.3148 13.1036 16.2891 14.0779 16.2891 15.2755C16.2891 16.4731 15.3148 17.4474 14.1172 17.4474Z" 
                  fill="#145E94"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_1578_3295">
                  <Rect width="18" height="19" fill="white"/>
                </ClipPath>
              </Defs>
            </Svg>
          </TouchableOpacity>
        </View>
        
        {/* Date, Time, Messages */}
        <View className="flex-row items-center mt-2 ml-1 space-x-4">
          <View className="flex-row items-center">
            <Svg width="15" height="15" viewBox="0 0 15 15" fill="none" style={{ marginRight: 4 }}>
              <Path 
                d="M10 1.15039C10.1094 1.15039 10.2146 1.19315 10.292 1.27051C10.3694 1.34787 10.4121 1.4531 10.4121 1.5625V2.40039H12.1875C12.6283 2.40074 13.0506 2.57601 13.3623 2.8877C13.674 3.19938 13.8493 3.62171 13.8496 4.0625V12.1875C13.8493 12.6283 13.674 13.0506 13.3623 13.3623C13.0506 13.674 12.6283 13.8493 12.1875 13.8496H2.8125C2.37177 13.8491 1.94934 13.6739 1.6377 13.3623C1.32605 13.0507 1.15092 12.6282 1.15039 12.1875V4.0625L1.1582 3.89844C1.19631 3.51794 1.36494 3.16046 1.6377 2.8877C1.94934 2.57605 2.37177 2.40092 2.8125 2.40039H4.58789V1.5625C4.58789 1.4531 4.63065 1.34787 4.70801 1.27051C4.78537 1.19315 4.8906 1.15039 5 1.15039C5.1094 1.15039 5.21463 1.19315 5.29199 1.27051C5.36935 1.34787 5.41211 1.4531 5.41211 1.5625V2.40039H9.58789V1.5625C9.58789 1.4531 9.63065 1.34787 9.70801 1.27051C9.78537 1.19315 9.8906 1.15039 10 1.15039ZM1.97461 12.1875C1.97461 12.4096 2.06364 12.6222 2.2207 12.7793C2.37776 12.9364 2.59038 13.0254 2.8125 13.0254H12.1875C12.4096 13.0254 12.6222 12.9364 12.7793 12.7793C12.9364 12.6222 13.0254 12.4096 13.0254 12.1875V6.97461H1.97461V12.1875ZM2.8125 3.22461C2.34907 3.22461 1.97461 3.60014 1.97461 4.0625V6.15039H13.0254V4.0625C13.0254 3.84038 12.9364 3.62776 12.7793 3.4707C12.6222 3.31364 12.4096 3.22461 12.1875 3.22461H10.4121V4.0625C10.4121 4.1719 10.3694 4.27713 10.292 4.35449C10.2146 4.43185 10.1094 4.47461 10 4.47461C9.8906 4.47461 9.78537 4.43185 9.70801 4.35449C9.63065 4.27713 9.58789 4.1719 9.58789 4.0625V3.22461H5.41211V4.0625C5.41211 4.1719 5.36935 4.27713 5.29199 4.35449C5.21463 4.43185 5.1094 4.47461 5 4.47461C4.8906 4.47461 4.78537 4.43185 4.70801 4.35449C4.63065 4.27713 4.58789 4.1719 4.58789 4.0625V3.22461H2.8125Z" 
                fill="#145E94" 
                stroke="#145E94" 
                strokeWidth="0.2"
              />
            </Svg>
            <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#B0AAAA' }}>{date}</Text>
          </View>
          <View className="flex-row items-center ml-2">
            <Svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginRight: 4 }}>
              <G clipPath="url(#clip0_1579_3588)">
                <Path 
                  d="M7 13.125C3.6225 13.125 0.875 10.3775 0.875 7C0.875 3.6225 3.6225 0.875 7 0.875C10.3775 0.875 13.125 3.6225 13.125 7C13.125 10.3775 10.3775 13.125 7 13.125ZM7 1.75C4.10375 1.75 1.75 4.10375 1.75 7C1.75 9.89625 4.10375 12.25 7 12.25C9.89625 12.25 12.25 9.89625 12.25 7C12.25 4.10375 9.89625 1.75 7 1.75Z" 
                  fill="#145E94"
                />
                <Path 
                  d="M8.75003 9.1875C8.67128 9.1875 8.59253 9.17 8.52253 9.12625L6.33503 7.81375C6.27024 7.77481 6.21676 7.7196 6.17992 7.65359C6.14308 7.58759 6.12416 7.51309 6.12503 7.4375V3.9375C6.12503 3.6925 6.31753 3.5 6.56253 3.5C6.80753 3.5 7.00003 3.6925 7.00003 3.9375V7.1925L8.97753 8.37375C9.05898 8.42367 9.12194 8.49879 9.15685 8.58771C9.19177 8.67663 9.19674 8.77452 9.17102 8.86652C9.1453 8.95853 9.09028 9.03964 9.01431 9.09756C8.93834 9.15548 8.84556 9.18706 8.75003 9.1875Z" 
                  fill="#145E94"
                />
              </G>
              <Defs>
                <ClipPath id="clip0_1579_3588">
                  <Rect width="14" height="14" fill="white"/>
                </ClipPath>
              </Defs>
            </Svg>
            <Text className="-ml-[2px]" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#B0AAAA' }}>{time}</Text>
          </View>
          <View className="flex-row items-center ml-2">
            <Svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{ marginRight: 4 }}>
              <Path 
                d="M6.525 12.05C7.61774 12.05 8.68594 11.726 9.59452 11.1189C10.5031 10.5118 11.2113 9.64889 11.6294 8.63933C12.0476 7.62976 12.157 6.51887 11.9438 5.44713C11.7307 4.37538 11.2044 3.39092 10.4318 2.61824C9.65908 1.84555 8.67462 1.31935 7.60287 1.10616C6.53113 0.892981 5.42023 1.00239 4.41067 1.42057C3.40111 1.83874 2.53822 2.5469 1.93113 3.45548C1.32404 4.36406 1 5.43226 1 6.525C1 7.43847 1.221 8.29914 1.61389 9.05852L1 12.05L3.99148 11.4361C4.75025 11.8284 5.61215 12.05 6.525 12.05Z" 
                stroke="#145E94" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </Svg>
            <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#B0AAAA' }}>{messages}</Text>
          </View>
        </View>
      </View>

      {/* Players Section */}
      <View className="px-4 py-3">
        <View className="flex-row items-center justify-between">
          {/* Player 1 */}
          <View className="items-center">
            <View className="relative">
              <View className="w-[57px] h-[57px] rounded-full overflow-hidden justify-center items-center border-[1px] border-[#4774AD] bg-[#ffffff] mb-2">
                <View className="w-[52px] h-[52px] items-center justify-center">
                  <Image 
                    source={require('../assets/newspic1.png')}
                    className="w-full h-full"
                    style={{ resizeMode: 'cover' }}
                  />
                </View>
              </View>
              {/* Brazil Flag */}
              <View className="absolute bottom-3 right-0 w-5 h-5 z-20 items-center justify-center">
                <Svg width="24" height="20" viewBox="0 0 20 21" fill="none">
                  <G clipPath="url(#clip0_brazil_flag_1)">
                    <Path d="M19.0957 15.119C19.0957 15.7055 18.8733 16.2681 18.4774 16.6828C18.0815 17.0976 17.5445 17.3306 16.9846 17.3306H2.20681C1.64691 17.3306 1.10994 17.0976 0.714033 16.6828C0.318123 16.2681 0.0957031 15.7055 0.0957031 15.119V5.1666C0.0957031 4.58003 0.318123 4.01749 0.714033 3.60273C1.10994 3.18797 1.64691 2.95496 2.20681 2.95496H16.9846C17.5445 2.95496 18.0815 3.18797 18.4774 3.60273C18.8733 4.01749 19.0957 4.58003 19.0957 5.1666V15.119Z" fill="#009B3A"/>
                    <Path d="M17.3685 10.1428L9.59538 16.2934L1.82227 10.1428L9.59538 3.9917L17.3685 10.1428Z" fill="#FEDF01"/>
                    <Path d="M9.58319 13.6715C11.4656 13.6715 12.9916 12.0729 12.9916 10.1008C12.9916 8.12881 11.4656 6.53015 9.58319 6.53015C7.70079 6.53015 6.1748 8.12881 6.1748 10.1008C6.1748 12.0729 7.70079 13.6715 9.58319 13.6715Z" fill="#002776"/>
                    <Path d="M6.57537 8.42157C6.39835 8.77104 6.27846 9.14912 6.2207 9.5401C8.32918 9.37976 11.1908 10.5857 12.4189 12.0807C12.6311 11.7468 12.7884 11.373 12.885 10.9727C11.3692 9.42012 8.70654 8.41272 6.57537 8.42157Z" fill="#CBE9D4"/>
                    <Path d="M6.42871 10.2716H6.95649V10.8245H6.42871V10.2716ZM6.95649 11.3774H7.48427V11.9303H6.95649V11.3774Z" fill="#88C9F9"/>
                    <Path d="M8.0127 10.2716H8.54047V10.8245H8.0127V10.2716ZM9.06825 10.8245H9.59603V11.3774H9.06825V10.8245ZM11.1794 11.9303H11.7071V12.4832H11.1794V11.9303ZM9.59603 12.4832H10.1238V13.0361H9.59603V12.4832ZM11.1794 9.16577H11.7071V9.71868H11.1794V9.16577Z" fill="#55ACEE"/>
                    <Path d="M10.123 11.3774H10.6508V11.9304H10.123V11.3774Z" fill="#3B88C3"/>
                  </G>
                  <Defs>
                    <ClipPath id="clip0_brazil_flag_1">
                      <Rect width="19" height="19.9048" fill="white" transform="translate(0.0957031 0.19043)"/>
                    </ClipPath>
                  </Defs>
                </Svg>
              </View>
            </View>
            <Text className="-mt-1" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#210C0C' }}>{player1.name}</Text>
            <Text className="-mt-1" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, color: '#B0AAAA' }}>({player1.nickname})</Text>
          </View>

          {/* Player 2 */}
          <View className="items-center">
            <View className="relative">
              <View className="w-[57px] h-[57px] rounded-full overflow-hidden justify-center items-center border-[1px] border-[#4774AD] bg-[#ffffff] mb-2">
                <View className="w-[52px] h-[52px] items-center justify-center">
                  <Image 
                    source={require('../assets/newspic2.png')}
                    className="w-full h-full"
                    style={{ resizeMode: 'cover' }}
                  />
                </View>
              </View>
              {/* Brazil Flag */}
              <View className="absolute bottom-3 right-0 w-5 h-5 z-20 items-center justify-center">
                <Svg width="24" height="20" viewBox="0 0 20 21" fill="none">
                  <G clipPath="url(#clip0_brazil_flag_1)">
                    <Path d="M19.0957 15.119C19.0957 15.7055 18.8733 16.2681 18.4774 16.6828C18.0815 17.0976 17.5445 17.3306 16.9846 17.3306H2.20681C1.64691 17.3306 1.10994 17.0976 0.714033 16.6828C0.318123 16.2681 0.0957031 15.7055 0.0957031 15.119V5.1666C0.0957031 4.58003 0.318123 4.01749 0.714033 3.60273C1.10994 3.18797 1.64691 2.95496 2.20681 2.95496H16.9846C17.5445 2.95496 18.0815 3.18797 18.4774 3.60273C18.8733 4.01749 19.0957 4.58003 19.0957 5.1666V15.119Z" fill="#009B3A"/>
                    <Path d="M17.3685 10.1428L9.59538 16.2934L1.82227 10.1428L9.59538 3.9917L17.3685 10.1428Z" fill="#FEDF01"/>
                    <Path d="M9.58319 13.6715C11.4656 13.6715 12.9916 12.0729 12.9916 10.1008C12.9916 8.12881 11.4656 6.53015 9.58319 6.53015C7.70079 6.53015 6.1748 8.12881 6.1748 10.1008C6.1748 12.0729 7.70079 13.6715 9.58319 13.6715Z" fill="#002776"/>
                    <Path d="M6.57537 8.42157C6.39835 8.77104 6.27846 9.14912 6.2207 9.5401C8.32918 9.37976 11.1908 10.5857 12.4189 12.0807C12.6311 11.7468 12.7884 11.373 12.885 10.9727C11.3692 9.42012 8.70654 8.41272 6.57537 8.42157Z" fill="#CBE9D4"/>
                    <Path d="M6.42871 10.2716H6.95649V10.8245H6.42871V10.2716ZM6.95649 11.3774H7.48427V11.9303H6.95649V11.3774Z" fill="#88C9F9"/>
                    <Path d="M8.0127 10.2716H8.54047V10.8245H8.0127V10.2716ZM9.06825 10.8245H9.59603V11.3774H9.06825V10.8245ZM11.1794 11.9303H11.7071V12.4832H11.1794V11.9303ZM9.59603 12.4832H10.1238V13.0361H9.59603V12.4832ZM11.1794 9.16577H11.7071V9.71868H11.1794V9.16577Z" fill="#55ACEE"/>
                    <Path d="M10.123 11.3774H10.6508V11.9304H10.123V11.3774Z" fill="#3B88C3"/>
                  </G>
                  <Defs>
                    <ClipPath id="clip0_brazil_flag_1">
                      <Rect width="19" height="19.9048" fill="white" transform="translate(0.0957031 0.19043)"/>
                    </ClipPath>
                  </Defs>
                </Svg>
              </View>
            </View>
            <Text className="-mt-1" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#210C0C' }}>{player2.name}</Text>
            <Text className="-mt-1" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#B0AAAA' }}>({player2.nickname})</Text>
          </View>

          <Text style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 21, color: '#145E94' }} className="mx-3 mb-12 left-[6px]">vs.</Text>

          {/* Additional Players */}
          <View className="items-center">
            <View className="items-center">
            <View className="relative">
              <View className="w-[57px] h-[57px] rounded-full overflow-hidden justify-center items-center border-[1px] border-[#4774AD] bg-[#ffffff] mb-2">
                <View className="w-[52px] h-[52px] items-center justify-center">
                  <Image 
                    source={require('../assets/pro_game.png')}
                    className="w-full h-full"
                    style={{ resizeMode: 'cover' }}
                  />
                </View>
              </View>
              {/* Brazil Flag */}
              <View className="absolute bottom-3 right-0 w-5 h-5 z-20 items-center justify-center">
                <Svg width="24" height="20" viewBox="0 0 20 21" fill="none">
                  <G clipPath="url(#clip0_brazil_flag_1)">
                    <Path d="M19.0957 15.119C19.0957 15.7055 18.8733 16.2681 18.4774 16.6828C18.0815 17.0976 17.5445 17.3306 16.9846 17.3306H2.20681C1.64691 17.3306 1.10994 17.0976 0.714033 16.6828C0.318123 16.2681 0.0957031 15.7055 0.0957031 15.119V5.1666C0.0957031 4.58003 0.318123 4.01749 0.714033 3.60273C1.10994 3.18797 1.64691 2.95496 2.20681 2.95496H16.9846C17.5445 2.95496 18.0815 3.18797 18.4774 3.60273C18.8733 4.01749 19.0957 4.58003 19.0957 5.1666V15.119Z" fill="#009B3A"/>
                    <Path d="M17.3685 10.1428L9.59538 16.2934L1.82227 10.1428L9.59538 3.9917L17.3685 10.1428Z" fill="#FEDF01"/>
                    <Path d="M9.58319 13.6715C11.4656 13.6715 12.9916 12.0729 12.9916 10.1008C12.9916 8.12881 11.4656 6.53015 9.58319 6.53015C7.70079 6.53015 6.1748 8.12881 6.1748 10.1008C6.1748 12.0729 7.70079 13.6715 9.58319 13.6715Z" fill="#002776"/>
                    <Path d="M6.57537 8.42157C6.39835 8.77104 6.27846 9.14912 6.2207 9.5401C8.32918 9.37976 11.1908 10.5857 12.4189 12.0807C12.6311 11.7468 12.7884 11.373 12.885 10.9727C11.3692 9.42012 8.70654 8.41272 6.57537 8.42157Z" fill="#CBE9D4"/>
                    <Path d="M6.42871 10.2716H6.95649V10.8245H6.42871V10.2716ZM6.95649 11.3774H7.48427V11.9303H6.95649V11.3774Z" fill="#88C9F9"/>
                    <Path d="M8.0127 10.2716H8.54047V10.8245H8.0127V10.2716ZM9.06825 10.8245H9.59603V11.3774H9.06825V10.8245ZM11.1794 11.9303H11.7071V12.4832H11.1794V11.9303ZM9.59603 12.4832H10.1238V13.0361H9.59603V12.4832ZM11.1794 9.16577H11.7071V9.71868H11.1794V9.16577Z" fill="#55ACEE"/>
                    <Path d="M10.123 11.3774H10.6508V11.9304H10.123V11.3774Z" fill="#3B88C3"/>
                  </G>
                  <Defs>
                    <ClipPath id="clip0_brazil_flag_1">
                      <Rect width="19" height="19.9048" fill="white" transform="translate(0.0957031 0.19043)"/>
                    </ClipPath>
                  </Defs>
                </Svg>
              </View>
            </View>
            <View className="flex-row items-center justify-center">
              <View className="w-[14px] h-[14px] rounded-full mr-1 -mt-1 overflow-hidden">
                <LinearGradient
                  colors={['#FF9A6B', '#FF6B6B']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{ width: 14, height: 14, borderRadius: 7, alignItems: 'center', justifyContent: 'center' }}
                >
                  <Text style={{ fontFamily: 'Rubik', fontWeight: '700', fontSize: 9, color: '#FFFFFF' }}>C</Text>
                </LinearGradient>
              </View>
              <Text className="-mt-1" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#210C0C' }}>Goren S.</Text>
            </View>
            <Text className="-mt-1" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, color: '#B0AAAA' }}>(hard)</Text>
          </View>
          </View>

          <View className="items-center">
            <View className="items-center">
            <View className="relative">
              <View className="w-[57px] h-[57px] rounded-full overflow-hidden justify-center items-center border-[1px] border-[#4774AD] bg-[#ffffff] mb-2">
                <View className="w-[52px] h-[52px] items-center justify-center">
                  <Image 
                    source={require('../assets/newspic4.png')}
                    className="w-full h-full"
                    style={{ resizeMode: 'cover' }}
                  />
                </View>
              </View>
              {/* Brazil Flag */}
              <View className="absolute bottom-3 right-0 w-5 h-5 z-20 items-center justify-center">
                <Svg width="24" height="20" viewBox="0 0 20 21" fill="none">
                  <G clipPath="url(#clip0_brazil_flag_1)">
                    <Path d="M19.0957 15.119C19.0957 15.7055 18.8733 16.2681 18.4774 16.6828C18.0815 17.0976 17.5445 17.3306 16.9846 17.3306H2.20681C1.64691 17.3306 1.10994 17.0976 0.714033 16.6828C0.318123 16.2681 0.0957031 15.7055 0.0957031 15.119V5.1666C0.0957031 4.58003 0.318123 4.01749 0.714033 3.60273C1.10994 3.18797 1.64691 2.95496 2.20681 2.95496H16.9846C17.5445 2.95496 18.0815 3.18797 18.4774 3.60273C18.8733 4.01749 19.0957 4.58003 19.0957 5.1666V15.119Z" fill="#009B3A"/>
                    <Path d="M17.3685 10.1428L9.59538 16.2934L1.82227 10.1428L9.59538 3.9917L17.3685 10.1428Z" fill="#FEDF01"/>
                    <Path d="M9.58319 13.6715C11.4656 13.6715 12.9916 12.0729 12.9916 10.1008C12.9916 8.12881 11.4656 6.53015 9.58319 6.53015C7.70079 6.53015 6.1748 8.12881 6.1748 10.1008C6.1748 12.0729 7.70079 13.6715 9.58319 13.6715Z" fill="#002776"/>
                    <Path d="M6.57537 8.42157C6.39835 8.77104 6.27846 9.14912 6.2207 9.5401C8.32918 9.37976 11.1908 10.5857 12.4189 12.0807C12.6311 11.7468 12.7884 11.373 12.885 10.9727C11.3692 9.42012 8.70654 8.41272 6.57537 8.42157Z" fill="#CBE9D4"/>
                    <Path d="M6.42871 10.2716H6.95649V10.8245H6.42871V10.2716ZM6.95649 11.3774H7.48427V11.9303H6.95649V11.3774Z" fill="#88C9F9"/>
                    <Path d="M8.0127 10.2716H8.54047V10.8245H8.0127V10.2716ZM9.06825 10.8245H9.59603V11.3774H9.06825V10.8245ZM11.1794 11.9303H11.7071V12.4832H11.1794V11.9303ZM9.59603 12.4832H10.1238V13.0361H9.59603V12.4832ZM11.1794 9.16577H11.7071V9.71868H11.1794V9.16577Z" fill="#55ACEE"/>
                    <Path d="M10.123 11.3774H10.6508V11.9304H10.123V11.3774Z" fill="#3B88C3"/>
                  </G>
                  <Defs>
                    <ClipPath id="clip0_brazil_flag_1">
                      <Rect width="19" height="19.9048" fill="white" transform="translate(0.0957031 0.19043)"/>
                    </ClipPath>
                  </Defs>
                </Svg>
              </View>
            </View>
            <Text className="-mt-1" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#210C0C' }}>Penn N.</Text>
            <Text className="-mt-1" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, color: '#B0AAAA' }}>(panther)</Text>
          </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NewsCard2;
