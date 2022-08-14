import React, {useState} from 'react';
import {Text, View, Image, Pressable} from 'react-native';
import colors from '../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import {styles} from './feed.styles';
import {Comment} from '../comment';
import {IPost} from '../types/models';
import {Carousel} from '../carousel';
import {SingleImage} from './single-image.component';
interface IProps {
  post: IPost;
}

export const FeedPost = ({post}: IProps) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const toggeleExpanded = () => {
    setIsDescriptionExpanded(prev => !prev);
  };

  const toggeleLiked = () => {
    setIsLiked(prev => !prev);
  };

  return (
    <View style={styles.post}>
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {post.image ? (
        <SingleImage imageUrl={post.image} onDoublePress={toggeleLiked} />
      ) : post.images ? (
        <Carousel images={post.images} onDoublePress={toggeleLiked} />
      ) : null}
      <View style={styles.footer}>
        <View style={styles.iconContainer}>
          <Pressable onPress={toggeleLiked}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={styles.bookmarkIcon}
            color={colors.black}
          />
        </View>
        <Text style={styles.text}>
          Liked by <Text style={styles.bold}>{post.user.username}</Text> and{' '}
          <Text style={styles.bold}>{post.nofLikes}</Text> others
        </Text>
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.bold}>{post.user.username}</Text>{' '}
          {post.description}
        </Text>
        <Text onPress={toggeleExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>
        {/* Comment */}
        <Text>View all 16 {post.nofComments}</Text>
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}
        {/* Posted date */}
        <Text>{post.createdAt}</Text>
      </View>
    </View>
  );
};
