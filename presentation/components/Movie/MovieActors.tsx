import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';

interface Props {
  poster: string;
  name: string;
  character: string;
}

const MovieActors = ({poster, name, character}: Props) => {
  return (
    <View className="mx-2 pb-8">
      <Image
        source={{uri: poster}}
        className="shadow-lg  w-full h-full"
        style={{
          width: 90,
          height: 130,
          borderRadius: 16
        }}
        resizeMode="cover"
      />
      <View className="justify-center items-center">
        <Text className="text-sm font-bold text-center mt-2">{name}</Text>
        <Text className="text-xs text-center mt-2">{character}</Text>
      </View>
    </View>
  );
};

export default MovieActors;
