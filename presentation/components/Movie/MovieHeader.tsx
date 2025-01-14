import {Ionicons} from '@expo/vector-icons';
import {View, Text, useWindowDimensions, Image, Pressable} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';

import React from 'react';
import {router} from 'expo-router';

interface Props {
  poster: string;
  originalTitle: string;
  title: string;
}

const MovieHeader = ({originalTitle, poster, title}: Props) => {
  const {height: screenHeight} = useWindowDimensions();

  return (
    <>
      <LinearGradient
        colors={['rgba(0,0,0,0.3)', 'transparent']}
        start={[0, 0]}
        style={{
          position: 'absolute',
          height: screenHeight * 0.4,
          zIndex: 1,
          width: '100%'
        }}
      />
      <View
        style={{
          position: 'absolute',
          top: 35,
          left: 10,
          elevation: 5,
          zIndex: 99
        }}
      >
        <Pressable onPress={() => router.dismiss()}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </Pressable>
      </View>
      <View
        className="shadow-xl shadow-black/20"
        style={{height: screenHeight}}
      >
        <View className="flex-1 rounded-b-[28px] overflow-hidden">
          <Image source={{uri: poster}} resizeMode="cover" className="flex-1" />
        </View>

        <View className=" p-4">
          <Text className="text-lg">{originalTitle}</Text>
          <Text className="text-2xl  font-bold">{title}</Text>
        </View>
      </View>
    </>
  );
};

export default MovieHeader;
