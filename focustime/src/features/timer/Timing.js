import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { spacing } from '../../utils/sizes';

export const Timing = ({ onTimeChange }) => {
  return (
    <>
      <View>
        <RoundedButton
          size={spacing.xxxxl}
          title="10"
          onPress={() => onTimeChange(10)}
        />
      </View>
      <View>
        <RoundedButton
          size={spacing.xxxxl}
          title="15"
          onPress={() => onTimeChange(15)}
        />
      </View>
      <View>
        <RoundedButton
          size={spacing.xxxxl}
          title="20"
          onPress={() => onTimeChange(20)}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
