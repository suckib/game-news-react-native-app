import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

const Chat = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const now = new Date();
      const newMessage = {
        id: Date.now(),
        text: message.trim(),
        timestamp: now.toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit' 
        }),
        sender: 'Penn N. (panther)',
        sentAt: now
      };
      setMessages(prevMessages => [...prevMessages, newMessage]);
      setMessage('');
    }
  };

  return (
    <View className="flex-1 bg-[#fafafa]">
      {/* Header */}
      <View className="bg-white h-[150px] px-4 py-3 border-b border-[#eeeeee]" style={{ paddingTop: 50 }}>
        <View className="flex-row items-center justify-center">
          <View className="flex-row items-center justify-center">
            <Text className="text-center" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 18, color: '#145E94' }}>
              Monday, February 23 | 14:00 - Tel Aviv
            </Text>
          </View>
          <TouchableOpacity className="-ml-1" onPress={() => navigation.navigate('Game')}>
            <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <Path d="M21.7043 12.9999L13.2123 4.27291C13.1423 4.20258 13.0871 4.11908 13.0496 4.02725C13.0122 3.93542 12.9933 3.83708 12.9942 3.73791C12.995 3.63875 13.0155 3.54073 13.0544 3.44953C13.0934 3.35833 13.15 3.27577 13.2211 3.20661C13.2922 3.13745 13.3763 3.08308 13.4685 3.04663C13.5607 3.01018 13.6593 2.99239 13.7584 2.99428C13.8576 2.99616 13.9554 3.0177 14.0461 3.05763C14.1369 3.09756 14.2189 3.1551 14.2873 3.22691L23.2873 12.4769C23.4235 12.6169 23.4997 12.8046 23.4997 12.9999C23.4997 13.1953 23.4235 13.3829 23.2873 13.5229L14.2873 22.7729C14.2189 22.8447 14.1369 22.9023 14.0461 22.9422C13.9554 22.9821 13.8576 23.0037 13.7584 23.0055C13.6593 23.0074 13.5607 22.9896 13.4685 22.9532C13.3763 22.9167 13.2922 22.8624 13.2211 22.7932C13.15 22.7241 13.0934 22.6415 13.0544 22.5503C13.0155 22.4591 12.995 22.3611 12.9942 22.2619C12.9933 22.1627 13.0122 22.0644 13.0496 21.9726C13.0871 21.8807 13.1423 21.7972 13.2123 21.7269L21.7043 12.9999Z" fill="black"/>
            </Svg>
          </TouchableOpacity>
        </View>
        
        {/* Horizontal Line */}
        <View className="w-[calc(100vw)] h-px bg-[#eeeeee] mt-5 -ml-4"></View>
        
        {/* User Avatars */}
        <View className="flex-row items-center justify-center mt-[12px]">
          <TouchableOpacity className="absolute left-0" onPress={handleGoBack}>
            <Svg width="25" height="27" viewBox="0 0 25 27" fill="none">
              <Path d="M20.2109 17.2052C18.6751 17.2052 17.3105 17.9516 16.4601 19.1004L9.13907 15.3591C9.2619 14.9418 9.32812 14.5005 9.32812 14.044C9.32812 13.4257 9.20691 12.8353 8.98744 12.2948L16.6603 7.68477C17.5165 8.68961 18.7905 9.32812 20.2109 9.32812C22.7827 9.32812 24.875 7.23583 24.875 4.66406C24.875 2.0923 22.7827 0 20.2109 0C17.6392 0 15.5469 2.0923 15.5469 4.66406C15.5469 5.25847 15.6589 5.82712 15.8625 6.35038L8.1704 10.9719C7.31491 9.99674 6.06022 9.37995 4.66406 9.37995C2.0923 9.37995 0 11.4722 0 14.044C0 16.6158 2.0923 18.7081 4.66406 18.7081C6.22507 18.7081 7.60926 17.9372 8.45631 16.7561L15.7561 20.4866C15.6202 20.9237 15.5469 21.388 15.5469 21.8693C15.5469 24.441 17.6392 26.5333 20.2109 26.5333C22.7827 26.5333 24.875 24.441 24.875 21.8693C24.875 19.2975 22.7827 17.2052 20.2109 17.2052ZM20.2109 1.55469C21.9254 1.55469 23.3203 2.94955 23.3203 4.66406C23.3203 6.37857 21.9254 7.77344 20.2109 7.77344C18.4964 7.77344 17.1016 6.37857 17.1016 4.66406C17.1016 2.94955 18.4964 1.55469 20.2109 1.55469ZM4.66406 17.1534C2.94955 17.1534 1.55469 15.7585 1.55469 14.044C1.55469 12.3295 2.94955 10.9346 4.66406 10.9346C6.37857 10.9346 7.77344 12.3295 7.77344 14.044C7.77344 15.7585 6.37857 17.1534 4.66406 17.1534ZM20.2109 24.9786C18.4964 24.9786 17.1016 23.5838 17.1016 21.8693C17.1016 20.1548 18.4964 18.7599 20.2109 18.7599C21.9254 18.7599 23.3203 20.1548 23.3203 21.8693C23.3203 23.5838 21.9254 24.9786 20.2109 24.9786Z" fill="#210C0C"/>
            </Svg>
          </TouchableOpacity>

          <View className="flex-row items-center">
            {[1, 2, 3, 4].map((index) => (
              <View key={index} className="relative mr-2">
                <View className="w-[33px] h-[33px] rounded-full bg-gray-300 overflow-hidden">
                  <Image 
                    source={require('../assets/wiz_chat.png')} 
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
                {index <= 4 && (
                  <View className="absolute bottom-0 -right-1 w-3 h-3 bg-[#88EC65] rounded-full border border-white"></View>
                )}
              </View>
            ))}
          </View>
        </View>
      </View>

      {/* Chat Messages */}
      <ScrollView className="flex-1 px-4 py-4 bg-[#fafafa]" showsVerticalScrollIndicator={false}>
        {/* Message 1 */}
        <View className="mb-6 left-12 ml-1 w-[242px] h-[97px]">
          <View className="flex-row items-start">
            <View className="flex-1">
              <View className="bg-white rounded-2xl p-3 border border-[#EEEEEE]">
                <Text className="font-medium mb-1" style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: 16, color: '#210C0C' }}>
                  Penn N. (panther)
                </Text>
                <Text className="font-medium" style={{ fontFamily: 'Rubik', fontWeight: '300', fontSize: 14, color: '#210C0C', lineHeight: 20 }}>
                  Hey guys, thanks a lot for the impressive game, it was fun!
                </Text>
                <View className="flex-row justify-end items-end -mt-1">
                  <Text className="font-regular" style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: 12, color: '#999' }}>
                    20:00
                  </Text>
                </View>
              </View>
              
            </View>
          </View>
        </View>

        {/* Message 2 */}
        <View className="mb-6 w-[311px] h-[97px] -mt-1">
          <View className="flex-row items-start relative">
            <View className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <Image 
                    source={require('../assets/wiz_chat.png')} 
                    className="w-full h-full"
                    resizeMode="cover"
              />
            </View>
            <View className="flex-1 ml-12 left-1">
              <View className="bg-white rounded-2xl p-3 border border-[#EEEEEE]">
                <Text className="font-medium" style={{ fontFamily: 'Rubik', fontWeight: '300', fontSize: 14, color: '#210C0C', lineHeight: 20 }}>
                  Certainly, it was fantastic to see how long each point lasted. It's always fun to play with players
                </Text>
                <View className="flex-row justify-end items-end -mt-1">
                  <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                    20:00
                  </Text>
                </View>
              </View>
              <View className="absolute w-[20px] h-[30px] bottom-0 -left-3">
                <Image 
                    source={require('../assets/edge.png')} 
                    className="w-full h-full"
                    resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Message 3 */}
        <View className="mb-6 w-[247px] h-[94px] mt-1">
          <View className="flex-row items-start relative">
            <View className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <Image 
                    source={require('../assets/wiz_chat.png')} 
                    className="w-full h-full"
                    resizeMode="cover"
              />
            </View>
            <View className="flex-1 ml-12 left-1">
              <View className="bg-white rounded-2xl p-3 border border-[#EEEEEE]">
                <Text className="font-medium mb-1" style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: 16, color: '#210C0C' }}>
                  Penn N. (panther)
                </Text>
                <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#333', lineHeight: 20 }}>
                  The dedication of the ball was stunning.
                </Text>
                <View className="flex-row justify-end items-end -mt-1">
                  <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                    20:00
                  </Text>
                </View>
              </View>
              <View className="absolute w-[20px] h-[30px] bottom-0 -left-3">
                <Image 
                    source={require('../assets/edge.png')} 
                    className="w-full h-full"
                    resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Message 4 */}
        <View className="mb-6 w-[247px] h-[94px] mt-3">
          <View className="flex-row items-start relative">
            <View className="absolute bottom-0 left-0 w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <Image 
                    source={require('../assets/wiz_chat.png')} 
                    className="w-full h-full"
                    resizeMode="cover"
              />
            </View>
            <View className="flex-1 ml-12 left-1">
              <View className="bg-white rounded-2xl p-3 border border-[#EEEEEE]">
                <Text className="font-medium mb-1" style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: 16, color: '#210C0C' }}>
                  Penn N. (panther)
                </Text>
                <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 14, color: '#333', lineHeight: 20 }}>
                  The dedication of the ball was stunning.
                </Text>
                <View className="flex-row justify-end items-end -mt-1">
                  <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#999' }}>
                    20:00
                  </Text>
                </View>
              </View>
              <View className="absolute w-[20px] h-[30px] bottom-0 -left-3">
                <Image 
                    source={require('../assets/edge.png')} 
                    className="w-full h-full"
                    resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Message 5 - User's own message (right side) */}
        <View className="mb-6 w-full h-[95px] mt-3">
          <View className="flex-row items-start justify-end relative">
            <View className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
              <Image 
                    source={require('../assets/wiz_chat.png')} 
                    className="w-full h-full"
                    resizeMode="cover"
              />
            </View>
            <View className="flex-1 mr-12 right-2">
              <LinearGradient
                colors={['#32516D', '#3199DD']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={{
                  borderRadius: 16,
                  padding: 12,
                  marginLeft: 48
                }}
              >
                <Text className="font-medium mb-1" style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: 16, color: '#fff' }}>
                  Penn N. (panther)
                </Text>
                <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '300', fontSize: 14, color: '#fff', lineHeight: 20 }}>
                  I'm crossing my fingers that the next game will be crazy!
                </Text>
                <View className="flex-row justify-end items-end -mt-1">
                  <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#fff' }}>
                    20:00
                  </Text>
                </View>
              </LinearGradient>
              <View className="absolute w-[20px] h-[30px] bottom-0 -right-4 mr-[3px] mb-[4px]">
                <Image 
                    source={require('../assets/edge2.png')} 
                    className="w-full h-full"
                    resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>

        {/* Dynamic Messages */}
        {messages.map((msg, index) => {
          // Check if previous message was sent within 1 minutes
          const showSender = index === 0 || 
            !messages[index - 1] || 
            (msg.sentAt - messages[index - 1].sentAt) > 1 * 60 * 1000; // 1 minutes in milliseconds

          // Use -mt-4 if within 1 minutes, -mt-1 if more than 2 minutes apart
          const marginTop = index === 0 ? 'mt-3' : (showSender ? '-mt-1' : '-mt-4');
          
          return (
            <View key={msg.id} className={`mb-6 w-full h-auto ${marginTop}`}>
              <View className="flex-row items-start justify-end relative">
                <View className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                  <Image 
                        source={require('../assets/wiz_chat.png')} 
                        className="w-full h-full"
                        resizeMode="cover"
                  />
                </View>
                <View className="mr-12 right-2 max-w-full">
                  <LinearGradient
                    colors={['#32516D', '#3199DD']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                      borderRadius: 16,
                      padding: 12,
                      marginLeft: 48,
                      alignSelf: 'flex-end',
                      minWidth: 160
                    }}
                  >
                    {showSender && (
                      <Text className="font-medium mb-1" style={{ fontFamily: 'Rubik', fontWeight: '500', fontSize: 16, color: '#fff' }}>
                        {msg.sender}
                      </Text>
                    )}
                    <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '300', fontSize: 14, color: '#fff', lineHeight: 20 }}>
                      {msg.text}
                    </Text>
                    <View className="flex-row justify-end items-end -mt-1">
                      <Text className="font-regular" style={{ fontFamily: 'Rubik', fontWeight: '400', fontSize: 12, color: '#fff' }}>
                        {msg.timestamp}
                      </Text>
                    </View>
                  </LinearGradient>
                  <View className="absolute w-[20px] h-[30px] bottom-0 -right-4 mr-[3px] mb-[5px]">
                    <Image 
                        source={require('../assets/edge2.png')} 
                        className="w-full h-full"
                        resizeMode="contain"
                    />
                  </View>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>

      {/* Input Area */}
      <View className="bg-white px-4 py-7 border-t border-[#eeeeee]">
        <View className="flex-row items-center">
          <TouchableOpacity className="mr-3 -mt-6">
            <Svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <Path d="M8.9834 0.51416V7.01416H15.4834V8.98096H8.9834V15.481H7.0166V8.98096H0.516602V7.01416H7.0166V0.51416H8.9834Z" fill="#145E94" stroke="white" strokeWidth="0.2"/>
            </Svg>
          </TouchableOpacity>
          
          <View className="flex-1 flex-row items-center bg-white -mt-4">
            <TextInput
              className="flex-1 -mt-2 py-2"
              placeholder="Add a comment..."
              placeholderTextColor="#999"
              value={message}
              onChangeText={setMessage}
              multiline
              style={{ 
                fontFamily: 'Rubik', 
                fontWeight: '400', 
                fontSize: 16,
                color: '#333',
                maxHeight: 100
              }}
            />
          </View>
          
          <TouchableOpacity 
            className="ml-3 -mt-4 w-10 h-10 bg-[#145E94] rounded-full items-center justify-center"
            onPress={handleSendMessage}
          >
            <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <Path d="M2.18405 2.11207C2.2587 2.05108 2.34939 2.01297 2.44519 2.00233C2.541 1.99168 2.63784 2.00896 2.72405 2.05207L17.7241 9.55207C17.8073 9.59354 17.8773 9.65739 17.9262 9.73643C17.9751 9.81548 18.001 9.90661 18.001 9.99957C18.001 10.0925 17.9751 10.1837 17.9262 10.2627C17.8773 10.3418 17.8073 10.4056 17.7241 10.4471L2.72405 17.9471C2.63793 17.9902 2.54117 18.0076 2.44542 17.997C2.34968 17.9865 2.25901 17.9485 2.18433 17.8877C2.10965 17.8268 2.05414 17.7457 2.02446 17.654C1.99479 17.5624 1.99221 17.4641 2.01705 17.3711L3.98305 10.0001L2.01705 2.62907C1.99209 2.53597 1.99458 2.43764 2.02421 2.34591C2.05384 2.25419 2.10935 2.17298 2.18405 2.11207ZM4.88405 10.5001L3.27005 16.5561L16.3821 10.0001L3.26905 3.44407L4.88405 9.50007H11.5001C11.6327 9.50007 11.7598 9.55275 11.8536 9.64652C11.9474 9.74029 12.0001 9.86747 12.0001 10.0001C12.0001 10.1327 11.9474 10.2599 11.8536 10.3536C11.7598 10.4474 11.6327 10.5001 11.5001 10.5001H4.88405Z" fill="white"/>
            </Svg>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Chat;
