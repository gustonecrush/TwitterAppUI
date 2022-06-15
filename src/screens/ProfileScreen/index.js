import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {Users} from '../../assets';
import {Tweet} from '../../components';
import {PRIMARY_COLOR, SEC_TEXT_COLOR} from '../../utils.js';

Feather.loadFont();

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <ImageBackground
            style={styles.imgBg}
            source={require('../../assets/images/decors/bg.jpg')}>
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate('Tweets')}>
              <Feather name="chevron-left" size={25} color={'#FFF'} />
            </TouchableOpacity>
            <View style={styles.imgWraaper}>
              <TouchableOpacity>
                <Image
                  style={styles.img}
                  source={require('../../assets/images/users/user.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.editWrapper}>
                <Text style={styles.edit}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.nameWrapper}>
            <Text style={styles.name}>Farhan Augustiansyah</Text>
            <Text style={styles.username}>@gustonecrush</Text>
            <Text style={styles.bio}>
              Digital Goodies Team - Web & Mobile UI/UX development; Graphics;
              Illustrations
            </Text>
            <View style={styles.infoMainWrapper}>
              <View style={styles.infoWrapper}>
                <Feather name="link" color={PRIMARY_COLOR} size={14} />
                <Text style={styles.link}>gustonecrush.io</Text>
              </View>
              <View style={styles.infoWrapper}>
                <Feather name="calendar" color={SEC_TEXT_COLOR} size={14} />
                <Text style={styles.date}>Joined October 2021</Text>
              </View>
            </View>
            <View style={styles.followingWrapper}>
              <View style={styles.ketWrapper}>
                <Text style={styles.number}>216</Text>
                <Text style={styles.text}>Following</Text>
              </View>
              <View style={styles.ketWrapper}>
                <Text style={styles.number}>541</Text>
                <Text style={styles.text}>Followers</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.categoryWrapper}>
          <TouchableOpacity>
            <Text style={styles.categoryTextActive}>Tweets</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Tweets & Replies</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Media</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Likes</Text>
          </TouchableOpacity>
          <View style={styles.highlightActive}></View>
        </View>

        {/* Tweets */}
        <View style={styles.tweetWrapper}>
          <View style={styles.tweets}>
            <Tweet
              image={require('../../assets/images/users/user.png')}
              name={'Farhan A'}
              username={'@gustonecrush'}
              tweet={
                'Scheme Constructor - Your ultimate prototyping kit for all UX web and mobileapp design constructor.pixselzz.io'
              }
              comment={2}
              retweet={2}
              love={15}
              time={'7/31/19'}
            />
          </View>
          <View style={styles.highlight}></View>
          {Users.map(item => (
            <View key={item.id}>
              <View style={styles.tweets}>
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
              </View>
              <View style={styles.highlight}></View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  imgBg: {
    height: 180,
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  back: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: '#0F0F0F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  imgWraaper: {
    position: 'absolute',
    bottom: -55,
    left: 25,
    paddingRight: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Dimensions.get('window').width,
  },
  editWrapper: {
    alignSelf: 'center',
    marginTop: 35,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
  },
  edit: {
    fontFamily: 'Poppins-Bold',
    color: PRIMARY_COLOR,
    fontSize: 13,
  },
  nameWrapper: {
    marginTop: Dimensions.get('window').height * 0.085,
    marginHorizontal: 25,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
  },
  username: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
  },
  bio: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: 20,
  },
  infoMainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoWrapper: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  link: {
    color: PRIMARY_COLOR,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginLeft: 5,
  },
  date: {
    color: SEC_TEXT_COLOR,
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginLeft: 5,
  },
  followingWrapper: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  ketWrapper: {
    marginRight: 10,
    flexDirection: 'row',
  },
  number: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    marginLeft: 5,
    color: SEC_TEXT_COLOR,
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    marginTop: 20,
    borderBottomColor: SEC_TEXT_COLOR,
    borderBottomWidth: 0.5,
    paddingBottom: 18,
  },
  categoryTextActive: {
    fontFamily: 'Poppins-Bold',
    color: PRIMARY_COLOR,
    marginRight: 25,
  },
  categoryText: {
    fontFamily: 'Poppins-Bold',
    color: SEC_TEXT_COLOR,
    marginRight: 25,
  },
  highlight: {
    height: 0.35,
    backgroundColor: '#687684',
    marginTop: 10,
    marginBottom: 10,
  },
  tweetWrapper: {
    marginTop: 20,
  },
  tweets: {
    paddingHorizontal: 25,
    marginBottom: 5,
  },
});
