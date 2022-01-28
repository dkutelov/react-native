import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar } from 'react-native-paper';

import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = React.useState(false);
  const [progress, setProgress] = React.useState(1)

  const onProgress = (progress) => {
    setProgress(progress)
  }

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} onProgress={onProgress}/>
      </View>
      <View style={styles.headings}>
        <Text style={styles.title}>Focusing on</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{padding: spacing.sm}}>
      <ProgressBar progress={progress} color="#5e84e2" style={{height:10}} />
      </View>
      <View style={styles.buttonWrapper}>
      {isStarted ? (
        <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
      ) : (
        <RoundedButton title="start" onPress={() => setIsStarted(true)} />
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headings: {
    paddingTop: spacing.xxl,
  },
  countdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    textAlign: 'center',
  },
  task: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
