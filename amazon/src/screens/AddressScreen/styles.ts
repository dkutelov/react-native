import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    padding: 10,
    height: '100%',
  },
  row: {
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    backgroundColor: 'white',
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 2,
  },
  error: {
    color: 'red',
    fontSize: 12,
  },
});
