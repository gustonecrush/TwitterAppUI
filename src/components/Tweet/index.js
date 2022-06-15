import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SEC_TEXT_COLOR} from '../../utils.js';
import FeedbackBar from '../FeedbackBar';

const Tweet = ({
  image,
  name,
  username,
  tweet,
  comment,
  retweet,
  love,
  time,
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.img} />
      <View style={styles.tweetWrapper}>
        <View style={styles.userInfo}>
          <Text style={styles.name}>{name} </Text>
          <Text style={styles.username}>
            {username} {time}h
          </Text>
        </View>
        <Text style={styles.tweet}>{tweet}</Text>
        <View style={styles.feedback}>
          <FeedbackBar comment={comment} retweet={retweet} love={love} />
        </View>
      </View>
    </View>
  );
};

export default Tweet;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  userInfo: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Poppins-Bold',
    marginRight: 5,
  },
  username: {
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    fontSize: 13,
  },
  tweetWrapper: {
    marginLeft: 10,
    width: '80%',
  },
  tweet: {
    fontFamily: 'Poppins-Regular',
    // textAlign: 'justify',
  },
  feedback: {
    marginLeft: -40,
    marginTop: 5,
  },
  img: {
    alignSelf: 'flex-start',
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
