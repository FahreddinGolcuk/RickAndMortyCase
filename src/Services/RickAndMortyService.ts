import axios from 'axios';
import { Episode, Character } from '@Modals/RickAndMorty';

const RickAndMortyService = {
  getEpisodeList: async (): Promise<Array<Episode>> => {
    const result = await axios.get('https://rickandmortyapi.com/api/episode');
    return result.data.results;
  },
  getEpisode: async (id: string): Promise<Episode> => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/episode/${id}`,
    );
    return result.data;
  },
  getCharacter: async (id: string): Promise<Character> => {
    const result = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`,
    );
    return result.data;
  },
};

export default RickAndMortyService;
