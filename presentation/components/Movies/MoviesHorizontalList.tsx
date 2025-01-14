import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Movie} from '@/infrastructure/interfaces/movie-interface';
import MoviePoster from './MoviePoster';

interface MoviesHorizontalListProps {
  title?: string;
  movies: Movie[];

  classname?: string;
  loadNextPage?: () => void;
}

const MoviesHorizontalList = ({
  movies,
  title,
  classname,
  loadNextPage
}: MoviesHorizontalListProps) => {
  const isLoading = useRef(false);

  useEffect(() => {
    isLoading.current = false;
  }, [movies]);
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoading.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;

    if (!isEndReached) return;

    isLoading.current = true;

    loadNextPage && loadNextPage();
  };

  return (
    <View className={`${classname}`}>
      {title && <Text className="text-2xl font-bold px-4 mb-2">{title}</Text>}

      <FlatList
        data={movies}
        keyExtractor={(item, i) => `${item.id}- ${i}`}
        renderItem={({item}) => (
          <MoviePoster id={item.id} poster={item.poster} smallPoster />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
      />
    </View>
  );
};

export default MoviesHorizontalList;
