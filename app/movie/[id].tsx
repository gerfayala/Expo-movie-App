import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {useLocalSearchParams} from 'expo-router';
import {useMovie} from '@/presentation/hooks/useMovie';

const MovieDetails = () => {
  const {id} = useLocalSearchParams();

  const {movieQuery} = useMovie(+id);

  if (movieQuery.isLoading) {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-2xl text-blue-700 font-semibold mb-2">
          Loading...
        </Text>
        <ActivityIndicator size="large" color={'blue'} />
      </View>
    );
  }

  return (
    <View>
      <Text>MovieDetails</Text>
    </View>
  );
};

export default MovieDetails;
