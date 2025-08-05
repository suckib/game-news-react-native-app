import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const SystemMessage = ({ 
}) => {
  return (
    <View 
      className="bg-white rounded-xl border border-[#EEEEEE]"
      style={{ width: 350, height: 130 }}
    >
        <View style={{ 
                flex: 1, 
                padding: 12,
                justifyContent: 'space-between'
              }}>
                {/* Header with System Message and Icon */}
                <View className="flex-row justify-between items-start">
                  <Text className="font-regular"
                    style={{
                      color: '#145E94',
                      fontFamily: 'Rubik',
                      fontWeight: '400',
                      fontSize: 14,
                      marginBottom: 4
                    }}
                  >
                    System Message
                  </Text>
                  <TouchableOpacity>
                    <Svg width="18" height="19" viewBox="0 0 18 19" fill="none">
                      <Path 
                        d="M14.1172 12.0177C13.0444 12.0177 12.0912 12.539 11.4973 13.3415L6.38357 10.7282C6.46936 10.4367 6.51562 10.1285 6.51562 9.80963C6.51562 9.37776 6.43096 8.96535 6.27766 8.58785L11.6371 5.36775C12.2351 6.06963 13.125 6.51562 14.1172 6.51562C15.9135 6.51562 17.375 5.05417 17.375 3.25781C17.375 1.46145 15.9135 0 14.1172 0C12.3208 0 10.8594 1.46145 10.8594 3.25781C10.8594 3.673 10.9376 4.0702 11.0798 4.43569L5.70696 7.66382C5.10941 6.98265 4.23302 6.55182 3.25781 6.55182C1.46145 6.55182 0 8.01328 0 9.80963C0 11.606 1.46145 13.0674 3.25781 13.0674C4.34817 13.0674 5.31501 12.529 5.90667 11.704L11.0055 14.3097C10.9106 14.615 10.8594 14.9394 10.8594 15.2755C10.8594 17.0719 12.3208 18.5333 14.1172 18.5333C15.9135 18.5333 17.375 17.0719 17.375 15.2755C17.375 13.4792 15.9135 12.0177 14.1172 12.0177ZM14.1172 1.08594C15.3148 1.08594 16.2891 2.06024 16.2891 3.25781C16.2891 4.45538 15.3148 5.42969 14.1172 5.42969C12.9196 5.42969 11.9453 4.45538 11.9453 3.25781C11.9453 2.06024 12.9196 1.08594 14.1172 1.08594ZM3.25781 11.9815C2.06024 11.9815 1.08594 11.0072 1.08594 9.80963C1.08594 8.61206 2.06024 7.63776 3.25781 7.63776C4.45538 7.63776 5.42969 8.61206 5.42969 9.80963C5.42969 11.0072 4.45538 11.9815 3.25781 11.9815ZM14.1172 17.4474C12.9196 17.4474 11.9453 16.4731 11.9453 15.2755C11.9453 14.0779 12.9196 13.1036 14.1172 13.1036C15.3148 13.1036 16.2891 14.0779 16.2891 15.2755C16.2891 16.4731 15.3148 17.4474 14.1172 17.4474Z" 
                        fill="#145E94"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                
                {/* Message Content */}
                <Text className="font-regular"
                  style={{
                    color: '#210C0C',
                    fontFamily: 'Rubik',
                    fontWeight: '400',
                    fontSize: 14,
                    lineHeight: 18
                  }}
                >
                  Lorem Ipsum is a term for a completely common meaningless text - sometimes also called Lorem Ipsum!
                </Text>
                
                {/* Timestamp */}
                <View style={{ 
                          flexDirection: 'row', 
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                          marginTop: 8
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
                          <Text className="font-regular ml-1"
                            style={{
                              color: '#B0AAAA',
                              fontFamily: 'Rubik',
                              fontWeight: '400',
                              fontSize: 12
                            }}
                          >
                            an hour ago
                          </Text>
                        </View>
                
      </View>
    </View>
  );
};

export default SystemMessage;
