import React from 'react';
import {FlatList} from 'react-native';
import {FeedPost} from '../../components/feed-post';

import posts from '../../assets/data/posts.json';

export const HomeScreen = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <FeedPost post={item} />}
      keyExtractor={item => `post-${item.id}`}
      showsVerticalScrollIndicator={false}
    />
  );
};
