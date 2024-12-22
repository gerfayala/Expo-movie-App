import {movieApi} from '@/core/api/movide-db-api';
import {MovieDBResponse} from '@/infrastructure/interfaces/movide-db-respones';

export const nowPlayingActions = async () => {
  try {
    const {data} = (await movieApi.get)<MovieDBResponse>('/now_playing');

    console.log(data);
    return [];
  } catch (error) {
    console.error(error);
    throw 'Cannot load  now playing movies';
  }
};
