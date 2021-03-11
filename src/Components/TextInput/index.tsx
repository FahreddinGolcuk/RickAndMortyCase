import React, { useRef, useState } from 'react';
import {
  Animated,
  Text,
  TextInput as NativeTextInput,
  View,
  ViewStyle,
} from 'react-native';
import { normalize } from '@Plugins/Device';
import _style from './style';

interface TextInputProps {
  placeholder?: string;
  borderColor?: string;
  size?: 'small' | 'medium' | 'large' | 'xLarge';
  secureTextEntry?: boolean;
  onChangeText: (value: string) => void;
  style?: ViewStyle | ViewStyle[];
  keyboardType?: 'default' | 'number-pad' | 'numeric';
  prefix?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  value?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
  placeholder,
  style = {},
  size = 'large',
  secureTextEntry = false,
  onChangeText,
  keyboardType = 'default',
  prefix = '',
  autoFocus = false,
  defaultValue = '',
  value = '',
  onBlur,
  onFocus,
}): JSX.Element => {
  const bottomY = useRef(new Animated.Value(0)).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const leftX = useRef(new Animated.Value(0)).current;
  const [borderColor, setBorderColor] = useState('black');
  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(bottomY, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
      Animated.timing(leftX, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const stopAnimation = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 550,
        useNativeDriver: true,
      }),
      Animated.timing(bottomY, {
        toValue: 0,
        duration: 550,
        useNativeDriver: true,
      }),
      Animated.timing(leftX, {
        toValue: 0,
        duration: 550,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View
      style={[
        style,
        _style[size],
        {
          height: normalize(36),
          borderBottomWidth: 1,
          borderBottomColor: borderColor,
          margin: normalize(16),
          paddingLeft: normalize(16),
          flexDirection: 'row',
        },
      ]}>
      <Animated.View
        style={{
          position: 'absolute',
          opacity: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: bottomY.interpolate({
                inputRange: [0, 1],
                outputRange: [0, normalize(-15)],
              }),
            },
            {
              translateX: leftX.interpolate({
                inputRange: [0, 1],
                outputRange: [0, normalize(-5)],
              }),
            },
          ],
        }}>
        <Text style={{ color: 'black' }}>{placeholder}</Text>
      </Animated.View>
      <NativeTextInput
        defaultValue={defaultValue}
        value={value}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        placeholderTextColor={'#d4cee0'}
        onBlur={() => {
          stopAnimation();
          setBorderColor('grey');
          if (onBlur) {
            onBlur();
          }
        }}
        onFocus={() => {
          startAnimation();
          setBorderColor('black');
          if (onFocus) {
            onFocus();
          }
        }}
        style={{ marginRight: 'auto', width: '75%' }}
      />
      <Text style={{ fontWeight: 'bold', color: 'white' }}>{prefix}</Text>
    </View>
  );
};

export default TextInput;
