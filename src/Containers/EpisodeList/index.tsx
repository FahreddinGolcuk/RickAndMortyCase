import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import RickAndMortyService from '@Services/RickAndMortyService';
import { Episode } from '@Modals/RickAndMorty';
import EpisodeItem from '@Components/EpisodeItem';
import { Background } from '@Components/index';

const EpisodeList: React.FunctionComponent = (): JSX.Element => {
  const [list, setList] = useState<Array<Episode>>([]);
  useEffect(() => {
    (async () => {
      const result = await RickAndMortyService.getEpisodeList();
      console.log(result);
      setList(result);
    })();
  }, []);
  return (
    <Background>
      <FlatList
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EpisodeItem item={item} />}
      />
    </Background>
  );
};

export default EpisodeList;
