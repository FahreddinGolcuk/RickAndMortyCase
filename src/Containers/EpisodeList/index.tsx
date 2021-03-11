import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import RickAndMortyService from '@Services/RickAndMortyService';
import { Episode } from '@Modals/RickAndMorty';
import { Background, EpisodeItem } from '@Components/index';

const EpisodeList: React.FunctionComponent = (): JSX.Element => {
  const [list, setList] = useState<Array<Episode>>([]);
  useEffect(() => {
    (async () => {
      const result = await RickAndMortyService.getEpisodeList();
      setList(result);
    })();
  }, []);
  return (
    <Background>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <EpisodeItem item={item} />}
      />
    </Background>
  );
};

export default EpisodeList;
