import React, { useEffect, useState } from 'react';
import RickAndMortyService from '@Services/RickAndMortyService';
import { CharacterItem } from '@Components/index';
import { Character } from '@Modals/RickAndMorty';

const CharacterDetail: React.FunctionComponent = ({ route }): JSX.Element => {
  const url = route?.params?.url;
  const [character, setCharacter] = useState<Character>({});
  useEffect(() => {
    (async () => {
      const result = await RickAndMortyService.getCharacter(url);
      setCharacter(result);
    })();
  }, [url]);
  return <CharacterItem item={character} />;
};

export default CharacterDetail;
