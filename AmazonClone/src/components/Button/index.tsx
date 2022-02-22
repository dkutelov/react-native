import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

interface ButtonProps {
  text: string;
  onPress: () => void;
  containerStyles?: {};
}
export const Button = ({text, onPress, containerStyles = {}}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.root, containerStyles]}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#e47911',
    marginVertical: 10,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
  },
  buttonText: {
    fontSize: 16,
  },
});
