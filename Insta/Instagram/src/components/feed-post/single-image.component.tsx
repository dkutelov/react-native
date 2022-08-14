import React from 'react';
import {Image} from 'react-native';

import {DoublePressable} from '../double-pressable';
import {styles} from './feed.styles';

interface ISingleImageProps {
  imageUrl: string;
  onDoublePress: () => void;
}

export const SingleImage = ({imageUrl, onDoublePress}: ISingleImageProps) => {
  return (
    <DoublePressable onDoublePress={onDoublePress}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={styles.image}
      />
    </DoublePressable>
  );
};
