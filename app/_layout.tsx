import {Slot} from 'expo-router';

import '../global.css';
import {nowPlayingActions} from '@/core/actions/movies/now-playins.acion';

const RootLayout = () => {
  nowPlayingActions();
  return <Slot />;
};

export default RootLayout;
