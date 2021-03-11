import { ViewStyle, StyleSheet } from 'react-native';
import { normalize } from '@Plugins/Device';

interface StyleProps {
  container: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: normalize(8),
    backgroundColor: '#e7ede6',
  },
});
