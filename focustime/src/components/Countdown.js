import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

const minutesToMillis = (min) => min * 1000 * 60;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 5, isPaused }) => {
  const interval = React.useRef(null);
  const [millies, setMillies] = React.useState(minutesToMillis(minutes));

  const countDown = () => {
    setMillies((time) => {
      if (time === 0) {
        return time;
      }

      const timeLeft = time - 1000;
      return timeLeft;
    });
  };

  React.useEffect(() => {
    if (isPaused) {
      return
    }

    interval.current = setInterval(countDown, 1000);
    return () => clearInterval(interval.current);
  }, [isPaused]);

  const minute = Math.floor((millies / 1000 / 60) % 60);
  const seconds = Math.floor((millies / 1000) % 60);

  return (
    <Text style={styles.text}>
      {formatTime(minutes)}:{formatTime(seconds)}
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
