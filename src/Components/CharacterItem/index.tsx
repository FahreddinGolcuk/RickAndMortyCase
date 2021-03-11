import React from 'react';
import { Image, Text, View } from 'react-native';
import { normalize } from '@Plugins/Device';
import { Character } from '@Modals/RickAndMorty';
import _style from './style';
import { Button } from '@Components/index';
import NavigationHelper from '@Plugins/NavigationHelper';
import { NavigationNames } from '@Utils/NavigationNames';

interface CharacterProps {
  item: Character;
}

const CharacterItem: React.FunctionComponent<CharacterProps> = ({
  item,
}): JSX.Element => {
  return (
    <View style={_style.container}>
      <Image
        source={{ uri: item.image }}
        resizeMode={'contain'}
        style={{ width: normalize(200), height: normalize(200) }}
      />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: normalize(36),
          color: '#54575c',
        }}>
        {item.name}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: normalize(25),
          color: '#54575c',
        }}>
        {item.species}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: normalize(20),
          color: '#54575c',
        }}>
        {item.gender}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: normalize(20),
          color: '#54575c',
        }}>
        Status : {item.status}
      </Text>
      <Button
        title={'GO EPISODE LIST'}
        size={'xLarge'}
        onPress={() => NavigationHelper.navigate(NavigationNames.episodeList)}
      />
    </View>
  );
};

export default CharacterItem;
