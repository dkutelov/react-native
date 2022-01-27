import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import { Focus } from './src/features/focus/Focus'
import {colors} from './src/utils/colors'
export default function App() {
  const [focusSubject, setFocusSubject] = React.useState(null)
  return (
    <View style={styles.container}>
      {focusSubject ? <Text>I have</Text> : <Focus addSubject={setFocusSubject}/>}
      <Text>{focusSubject}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  }
});
