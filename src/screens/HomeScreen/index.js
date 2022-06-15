import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {Users} from '../../assets';
import {FeedbackBar, Header, Tweet} from '../../components';
import {HEIGHT} from '../../utils.js';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Header page="Home" />
        </View>

        {/* Tweets */}
        <View style={styles.tweetWrapper}>
          {Users.map(item => (
            <View key={item.id}>
              <Tweet
                image={item.profile}
                name={item.name}
                username={item.username}
                tweet={item.tweets[0].content}
                comment={item.tweets[0].comment}
                retweet={item.tweets[0].retweet}
                love={item.tweets[0].love}
                time={item.tweets[0].created}
              />
              <View style={styles.highlight}></View>
            </View>
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.createTweet}>
        <Image
          style={styles.createIcon}
          source={require('../../assets/images/decors/create.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerWrapper: {
    paddingTop: HEIGHT * 0.075,
    paddingHorizontal: 25,
    paddingBottom: 20,
    borderBottomColor: '#E7ECF0',
    borderBottomWidth: 1,
  },
  tweetWrapper: {
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  highlight: {
    height: 0.35,
    backgroundColor: '#687684',
    marginTop: 10,
    marginBottom: 10,
  },
  createTweet: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    zIndex: 5,
  },
  crateIcon: {
    width: 30,
    height: 30,
  },
});
