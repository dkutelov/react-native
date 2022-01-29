import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes, isPaused, onProgress, onEnd }) => {
  const interval = React.useRef(null);
  const [millies, setMillies] = React.useState(minutesToMillis(minutes));

  const countDown = () => {
    setMillies((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        return time;
      }

      return time - 1000;
    });
  };

  useEffect(() => {
    if (isPaused) {
      if (interval.current) {
        clearInterval(interval.current);
      }
      return;
    }

    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  useEffect(() => {
    setMillies(minutesToMillis(minutes));
  }, [minutes]);

  useEffect(() => {
    onProgress(millies / minutesToMillis(minutes));
    if (millies === 0) {
      onEnd();
    }
  }, [millies]);

  const minute = Math.floor((millies / 1000 / 60) % 60);
  const seconds = Math.floor((millies / 1000) % 60);

  return (
    <Text style={styles.text}>
      {formatTime(minute)}:{formatTime(seconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizes.xxxl,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
    padding: spacing.lg,
    backgroundColor: colors.lightBlue,
  },
});
