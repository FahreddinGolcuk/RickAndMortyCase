import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { normalize } from '@Plugins/Device';
import { Character } from '@Modals/RickAndMorty';
import _style from './style';

interface CharacterProps {
  item: Character;
}

const CharacterItem: React.FunctionComponent<CharacterProps> = ({
  item,
}): JSX.Element => {
  return (
    <View style={_style.container}>
      <TouchableOpacity
        onPress={() => console.log('s')}
        style={{ flex: 0.85, flexDirection: 'row' }}>
        <Image
          source={{ uri: item.image }}
          resizeMode={'contain'}
          style={{ width: normalize(50), height: normalize(50) }}
        />
        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <Text style={{ fontWeight: 'bold' }}>{item.species}</Text>
        <Text style={{ fontWeight: 'bold' }}>{item.gender}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CharacterItem;
