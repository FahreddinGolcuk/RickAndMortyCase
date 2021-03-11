import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NewSimpson, SimpsonsDetail, SimpsonsList } from '@Containers/index';
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
          name={NavigationNames.simpsonsList}
          component={SimpsonsList}
        />
        <Stack.Screen
          name={NavigationNames.newSimpson}
          component={NewSimpson}
        />
        <Stack.Screen
          name={NavigationNames.simpsonDetail}
          component={SimpsonsDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
