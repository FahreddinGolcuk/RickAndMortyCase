import { ViewStyle, StyleSheet } from 'react-native';

interface StyleProps {
  container: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    flex: 1,
    backgroundColor: '#d8dde3',
  },
});
