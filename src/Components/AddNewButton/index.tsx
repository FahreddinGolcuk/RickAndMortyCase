import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import NavigationHelper from '@Plugins/NavigationHelper';
import { NavigationNames } from '@Utils/NavigationNames';
import _style from './style';

const AddNewButton: React.FunctionComponent = (): JSX.Element => {
  return (
    <TouchableOpacity
      style={_style.container}
      onPress={() => NavigationHelper.navigate(NavigationNames.newSimpson)}>
      <Text style={_style.text}>+</Text>
    </TouchableOpacity>
  );
};

export default AddNewButton;
