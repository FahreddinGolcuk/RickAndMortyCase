import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { deviceHeight, normalize } from '@Plugins/Device';

interface StyleProps {
  text: ViewStyle;
  item: ViewStyle;
  itemText: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: normalize(28),
  },
  item: {
    marginHorizontal: 4,
    marginBottom: 2,
    backgroundColor: '#e7ede6',
    height: deviceHeight() / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: 'grey',
    fontSize: normalize(23),
    fontWeight: 'bold',
  },
});
