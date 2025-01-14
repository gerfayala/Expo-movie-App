import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList
} from 'react-native';
import React from 'react';
import {useLocalSearchParams} from 'expo-router';
import {useMovie} from '@/presentation/hooks/useMovie';
import MovieHeader from '@/presentation/components/Movie/MovieHeader';
import MovieDescription from '@/presentation/components/Movie/MovieDescription';
import MovieActors from '@/presentation/components/Movie/MovieActors';

const MovieDetails = () => {
  const {id} = useLocalSearchParams();

  const {movieQuery, castQuery} = useMovie(+id);

  if (movieQuery.isLoading || !movieQuery.data) {
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
    <ScrollView>
      <MovieHeader
        poster={movieQuery.data.poster}
        originalTitle={movieQuery.data.originalTitle}
        title={movieQuery.data.title}
      />
      <MovieDescription movie={movieQuery.data} />

      <FlatList
        data={castQuery.data}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({item}) => (
          <MovieActors
            poster={item.avatar}
            name={item.name}
            character={item.character}
          />
        )}
      />
    </ScrollView>
  );
};

export default MovieDetails;
