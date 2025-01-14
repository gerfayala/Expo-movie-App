import {Pressable, Image} from 'react-native';
import React from 'react';
import {router} from 'expo-router';

interface Props {
  id: number;
  poster: string;
  smallPoster?: boolean;
  className?: string;
}

const MoviePoster = ({poster, id, smallPoster = false, className}: Props) => {
  return (
    <Pressable
      className={`active:opacity-90 px-2 ${className}`}
      onPress={() => router.push(`/movie/${id}`)}
    >
      <Image
        source={{uri: poster}}
        className="shadow-lg  w-full h-full"
        style={{
          width: smallPoster ? 90 : 150,
          height: smallPoster ? 130 : 250,
          borderRadius: 16
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
};

export default MoviePoster;
