import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Movie} from '@/infrastructure/interfaces/movie-interface';
import MoviePoster from './MoviePoster';

interface MoviesHorizontalListProps {
  title?: string;
  movies: Movie[];
}

const MoviesHorizontalList = ({movies, title}: MoviesHorizontalListProps) => {
  return (
    <View>
      {title && <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default MoviesHorizontalList;
