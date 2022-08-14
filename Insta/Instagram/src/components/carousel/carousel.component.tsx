import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import colors from '../../theme/colors';

import {DoublePressable} from '../double-pressable';
import {styles} from './carousel.styles';

interface ICarousel {
  images: string[];
  onDoublePress: () => void;
}

export const Carousel = ({images, onDoublePress}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const imageStyle = {width, aspectRatio: 1};
  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  //Avoid function creation on every render -> new memory ref to satisfy Flatlist
  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: ViewToken[]}) => {
      if (viewableItems && viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );

  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={imageStyle} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled //centers next image
        onViewableItemsChanged={onViewableItemsChanged.current} //if item goes outside the screen
        viewabilityConfig={viewabilityConfig}
      />
      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              ...styles.dot,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.white,
            }}
          />
        ))}
      </View>
    </View>
  );
};
