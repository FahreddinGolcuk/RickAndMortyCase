import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { deviceHeight, normalize } from '@Plugins/Device';

interface StyleProps {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    marginHorizontal: 4,
    marginBottom: 2,
    backgroundColor: '#e7ede6',
    height: deviceHeight() / 12,
  },
  text: {
    fontWeight: 'bold',
    fontSize: normalize(20),
    color: '#54575c',
  },
});
