import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  title = '',
  ...props
}) => (
  <TouchableOpacity
    style={[styles(size).radius, style]}
    onPress={props.onPress}>
    <Text style={[styles(size).text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);

const styles = (size) => {
  return StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: {
      color: '#fff',
      fontSize: size / 3,
    },
  });
};
