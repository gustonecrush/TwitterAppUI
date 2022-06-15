import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SEC_TEXT_COLOR} from '../../utils.js';

const MessageField = ({profile, name, username, date, msg}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainWrapper}>
        <Image style={styles.img} source={profile} />
        <View style={styles.msgWrapper}>
          <View style={styles.userWrapper}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.username}>{username}</Text>
          </View>
          <Text style={styles.msgBody}>{msg}</Text>
        </View>
      </View>
      <Text style={styles.date}>{date}</Text>
    </View>
  );
};

export default MessageField;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingBottom: 15,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  msgWrapper: {
    marginLeft: 15,
  },
  userWrapper: {
    flexDirection: 'row',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    marginRight: 5,
    fontSize: 15,
  },
  username: {
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    fontSize: 13,
  },
  msgBody: {
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    overflow: 'hidden',
    flexWrap: 'wrap',
    fontSize: 14,
    textAlign: 'justify',
  },
  date: {
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    alignSelf: 'flex-start',
    position: 'absolute',
    right: 25,
    top: 5,
  },
  mainWrapper: {
    flexDirection: 'row',
    width: '80%',
  },
});
