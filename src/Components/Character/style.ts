import { ViewStyle, StyleSheet } from 'react-native';

interface StyleProps {
  deleteButton: ViewStyle;
  container: ViewStyle;
}

export default StyleSheet.create<StyleProps>({
  container: {
    margin: 4,
    backgroundColor: '#e7ede6',
    flexDirection: 'row',
  },
  deleteButton: {
    backgroundColor: 'red',
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
