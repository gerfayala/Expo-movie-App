import {
  View,
  Text,
  ActivityIndicator,
  SafeAreaView,
  ScrollView
} from 'react-native';
import React from 'react';
import {useMovies} from '@/presentation/hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MainSlideShow from '@/presentation/hooks/components/MainSlideShow';
import MoviesHorizontalList from '@/presentation/hooks/components/MoviesHorizontalList';
import {Movie} from '@/infrastructure/interfaces/movie-interface';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  const {nowPlayingQuery, popularQuery, topRatedQuery, upComingQuery} =
    useMovies();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{paddingTop: safeArea.top}}>
        <Text className="text-2xl font-bold px-4 ">Now Playing</Text>
        <MainSlideShow movies={nowPlayingQuery.data ?? []} />
        <MoviesHorizontalList
          title="Popular"
          movies={popularQuery.data ?? []}
        />
        <MoviesHorizontalList
          title="Top Rated"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />
        <MoviesHorizontalList
          title="Upcoming"
          movies={upComingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
