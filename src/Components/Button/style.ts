import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { deviceHeight, normalize } from '@Plugins/Device';

interface StyleProps {
  container: ViewStyle;
  title: TextStyle;
  xSmall: ViewStyle;
  small: ViewStyle;
  medium: ViewStyle;
  large: ViewStyle;
  xLarge: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    backgroundColor: 'black',
    height: deviceHeight() / 20,
    borderRadius: normalize(8),
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 3,
      height: 3,
    },
    justifyContent: 'space-around',
    margin: normalize(15),
    shadowOpacity: 0.6,
    shadowRadius: 18,
  },
  title: {
    color: 'white',
    fontSize: normalize(20),
  },
  xSmall: {
    width: '20%',
  },
  small: {
    width: '30%',
  },
  large: {
    width: '50%',
  },
  medium: {
    width: '40%',
  },
  xLarge: {
    width: '70%',
  },
});
