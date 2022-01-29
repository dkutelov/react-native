import React, { useState } from 'react';
import { View, StyleSheet, Text, Vibration, Platform } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';

import { Countdown } from '../../components/Countdown';
import { RoundedButton } from '../../components/RoundedButton';
import { Timing } from './Timing';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';

const DEFAULT_TIME = 0.1;

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  // hook that avoids app going to sleep
  useKeepAwake();

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const [minutes, setMinutes] = useState(DEFAULT_TIME);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => {
        clearInterval(interval);
      }, 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFAULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (timeInMinutes) => {
    setMinutes(timeInMinutes);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          isPaused={!isStarted}
          onProgress={onProgress}
          minutes={minutes}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.headings}>
        <Text style={styles.title}>Focusing on</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={{ padding: spacing.sm }}>
        <ProgressBar
          progress={progress}
          color="#5e84e2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.timeButtonWrapper}>
        <Timing onTimeChange={changeTime} />
      </View>
      <View style={styles.startCancelButtonsWrapper}>
        {isStarted ? (
          <RoundedButton title="pause" onPress={() => setIsStarted(false)} />
        ) : (
          <RoundedButton title="start" onPress={() => setIsStarted(true)} />
        )}
      </View>
      <View style={styles.clearSubject}>
        <RoundedButton
          size={spacing.xxxl}
          title="-"
          onPress={() => clearSubject()}
        />
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
  startCancelButtonsWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeButtonWrapper: {
    flex: 0.3,
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  clearSubject: {
    paddingLeft: 25,
    paddingBottom: 25,
  },
});
