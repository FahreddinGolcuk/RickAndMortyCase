import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Episode } from '@Modals/RickAndMorty';
import _style from './style';
import { normalize } from '@Plugins/Device';
import NavigationHelper from '@Plugins/NavigationHelper';
import { NavigationNames } from '@Utils/NavigationNames';

interface EpisodeProps {
  item: Episode;
}

const EpisodeItem: React.FunctionComponent<EpisodeProps> = ({
  item,
}): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={() =>
        NavigationHelper.navigate(NavigationNames.episodeDetail, {
          id: item.id,
          episode: item.episode,
        })
      }
      style={_style.container}>
      <Text style={_style.text}>{item.name}</Text>
      <Text style={[_style.text, { fontSize: normalize(15), color: 'grey' }]}>
        {item.episode}
      </Text>
    </TouchableOpacity>
  );
};

export default EpisodeItem;
