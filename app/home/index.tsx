import {View, Text, ActivityIndicator, SafeAreaView} from 'react-native';
import React from 'react';
import {useMovies} from '@/presentation/hooks/useMovies';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MainSlideShow from '@/presentation/hooks/components/MainSlideShow';

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();

  const {nowPlayingQuery} = useMovies();
  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="mt-2" style={{paddingTop: safeArea.top}}>
      <Text className="text-2xl font-bold px-4 mb-2">Now Playing</Text>
      <MainSlideShow movies={nowPlayingQuery.data ?? []} />
    </View>
  );
};

export default HomeScreen;
