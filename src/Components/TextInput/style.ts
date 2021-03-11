import { ViewStyle, StyleSheet } from 'react-native';

interface StyleProps {
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
  xLarge: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  small: {
    width: '35%',
  },
  large: {
    width: '60%',
  },
  xLarge: {
    width: '85%',
  },
  medium: {
    width: '50%',
  },
});
