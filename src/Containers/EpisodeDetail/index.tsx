import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import RickAndMortyService from '@Services/RickAndMortyService';
import { Episode } from '@Modals/RickAndMorty';
import { deviceHeight } from '@Plugins/Device';
import NavigationHelper from '@Plugins/NavigationHelper';
import { NavigationNames } from '@Utils/NavigationNames';
import _style from './style';
import { Background } from '@Components/index';

const EpisodeDetail: React.FunctionComponent = ({ route }): JSX.Element => {
  const id = route?.params?.id;
  const [detail, setDetail] = useState<Episode>({});
  useEffect(() => {
    (async () => {
      const result = await RickAndMortyService.getEpisode(id);
      setDetail(result);
    })();
  }, [id]);

  return (
    <Background>
      <Text style={_style.text}>{detail.name}</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: deviceHeight() / 8 }}
        keyExtractor={(_, index) => index.toString()}
        data={detail.characters}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                NavigationHelper.navigate(NavigationNames.characterDetail, {
                  url: item,
                })
              }
              style={_style.item}>
              <Text style={_style.itemText}>Character {index + 1}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </Background>
  );
};

export default EpisodeDetail;
