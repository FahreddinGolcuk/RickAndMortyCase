import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import RickAndMortyService from '@Services/RickAndMortyService';
import { Episode } from '@Modals/RickAndMorty';
import { deviceHeight, normalize } from '@Plugins/Device';
import NavigationHelper from '@Plugins/NavigationHelper';
import { NavigationNames } from '@Utils/NavigationNames';

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
    <View>
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          fontSize: normalize(28),
        }}>
        {detail.name}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          alignSelf: 'center',
          fontSize: normalize(28),
          color: 'tomato',
        }}>
        {detail.episode}
      </Text>
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
              style={{
                marginHorizontal: 4,
                marginBottom: 2,
                backgroundColor: '#e7ede6',
                height: deviceHeight() / 12,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  color: 'grey',
                  fontSize: normalize(23),
                  fontWeight: 'bold',
                }}>
                Character {index + 1}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default EpisodeDetail;
