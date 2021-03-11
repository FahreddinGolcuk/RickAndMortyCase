import { ViewStyle, StyleSheet } from 'react-native';

interface StyleProps {
  container: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    margin: 4,
    backgroundColor: '#e7ede6',
    flexDirection: 'row',
  },
});
