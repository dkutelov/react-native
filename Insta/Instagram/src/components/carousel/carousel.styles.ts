import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

export const styles = StyleSheet.create({
  dots: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  dot: {
    width: 5,
    aspectRatio: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginHorizontal: 5,
    marginVertical: 15,
  },
});
