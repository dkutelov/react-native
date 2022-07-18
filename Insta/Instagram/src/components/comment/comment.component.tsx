import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {styles} from './comment.styles';
import colors from '../../theme/colors';
import {IComment} from '../types/models';

interface IProps {
  comment: IComment;
}

export const Comment = ({comment}: IProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Text style={styles.bold}>{comment.user.username}</Text>{' '}
        {comment.comment}
      </Text>
      <AntDesign
        name={'hearto'}
        size={14}
        style={styles.icon}
        color={colors.black}
      />
    </View>
  );
};

//rnst
