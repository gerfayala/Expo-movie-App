import {View, Text} from 'react-native';
import React from 'react';
import {MovieDetails} from '@/infrastructure/interfaces/movie-interface';
import {Formatter} from '@/app/helper/config/fornatter';

interface Props {
  movie: MovieDetails;
}

const MovieDescription = ({movie}: Props) => {
  return (
    <View className="mx-4 pb-14">
      <View className="flex flex-row">
        <Text>{movie.rating}</Text>
        <Text> - {movie.genres.join(', ')}</Text>
      </View>
      <Text className="font-bold mt-5">History</Text>
      <Text className="font-normal mt-2">{movie.description}</Text>
      <Text className=" text-2xl font-bold mt-5">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
