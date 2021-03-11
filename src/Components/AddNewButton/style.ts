import { ViewStyle, StyleSheet, TextStyle } from 'react-native';
import { normalize } from '@Plugins/Device';

interface StyleProps {
  container: ViewStyle;
  text: TextStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    borderRadius: normalize(180),
    backgroundColor: '#4291eb',
    width: normalize(49),
    height: normalize(49),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 2,
    bottom: normalize(36),
    right: normalize(8),
  },
  text: { color: 'white', fontWeight: 'bold', fontSize: normalize(36) },
});
