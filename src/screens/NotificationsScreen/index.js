import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Notifications} from '../../assets';
import {Header} from '../../components';
import {HEIGHT, PRIMARY_COLOR, SEC_TEXT_COLOR} from '../../utils.js';

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Header page="Notifications" />
        </View>

        {/* Category */}
        <View style={styles.categoryWrapper}>
          <TouchableOpacity>
            <Text style={styles.categoryTextActive}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.categoryText}>Mentions</Text>
          </TouchableOpacity>
          <View style={styles.highlightActive}></View>
        </View>

        <View style={styles.highlight}></View>

        {/* Notifications */}
        <View style={styles.notifWrapper}>
          {Notifications.map(item => (
            <View key={item.id}>
              <TouchableOpacity style={styles.notifContent}>
                <Image
                  source={require('../../assets/images/decors/star.png')}
                />
                <View style={styles.main}>
                  <Image source={item.profile} />
                  <Text style={styles.textNotif}>{item.notif}</Text>
                  <Text style={styles.text}>{item.message}</Text>
                </View>
              </TouchableOpacity>
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

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerWrapper: {
    paddingTop: HEIGHT * 0.075,
    paddingHorizontal: 25,
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
  notifWrapper: {
    marginHorizontal: 25,
  },
  notifContent: {
    paddingVertical: 25,
    flexDirection: 'row',
  },
  profile: {
    width: 40,
    height: 40,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    fontSize: 14,
  },
  textNotif: {
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    fontSize: 14,
    marginTop: 10,
  },
  main: {
    marginLeft: 5,
    width: '90%',
  },
  highlight: {
    height: 0.35,
    backgroundColor: '#687684',
    marginTop: 5,
    marginBottom: 5,
  },
  categoryWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginTop: 20,
    paddingBottom: 11,
  },
  categoryTextActive: {
    fontFamily: 'Poppins-Bold',
    color: PRIMARY_COLOR,
  },
  categoryText: {
    fontFamily: 'Poppins-Bold',
    color: SEC_TEXT_COLOR,
  },
  highlightActive: {
    height: 3,
    backgroundColor: PRIMARY_COLOR,
    marginBottom: 5,
    top: 0,
    position: 'absolute',
    zIndex: 10,
  },
});
