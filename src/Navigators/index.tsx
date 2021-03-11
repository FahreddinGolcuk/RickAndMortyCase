import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { EpisodeDetail, EpisodeList, CharacterDetail } from '@Containers/index';
import { NavigationNames } from '@Utils/NavigationNames';
import { isReadyRef, navigationRef } from '@Plugins/NavigationHelper';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationNames.episodeList}
          component={EpisodeList}
        />
        <Stack.Screen
          name={NavigationNames.episodeDetail}
          component={EpisodeDetail}
          options={({ route }) => ({
            title: route?.params?.episode,
            headerTitleStyle: { color: 'tomato' },
          })}
        />
        <Stack.Screen
          name={NavigationNames.characterDetail}
          component={CharacterDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
