import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, MessageField} from '../../components';
import {HEIGHT} from '../../utils.js';
import Feather from 'react-native-vector-icons/Feather';
import {Messages} from '../../assets';

Feather.loadFont();

const TrendsScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Header page="Messages" />
        </View>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color={'#687684'} />
          <TextInput
            placeholder="Search for people and groups"
            style={styles.textInput}
          />
        </View>
        <View style={styles.highlight}></View>

        {/* Messages */}
        <View style={styles.msgWrapper}>
          {Messages.map(item => (
            <View key={item.id}>
              <TouchableOpacity>
                <MessageField
                  profile={item.from.profile}
                  name={item.from.name}
                  username={item.from.username}
                  date={item.date}
                  msg={item.message}
                />
                <View style={styles.highlightMsg}></View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.createTweet}>
        <Image
          style={styles.createIcon}
          source={require('../../assets/images/decors/message.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TrendsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerWrapper: {
    paddingTop: HEIGHT * 0.075,
    paddingHorizontal: 25,
  },
  searchBar: {
    height: 34,
    backgroundColor: '#E7ECF0',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 25,
    paddingVertical: 6,
    paddingHorizontal: 20,
    marginTop: 25,
    borderRadius: 25,
  },
  textInput: {
    fontSize: 14,
    marginLeft: 8,
    color: '#687684',
    fontFamily: 'Poppins-Medium',
  },
  highlight: {
    height: 0.35,
    backgroundColor: '#687684',
    marginTop: 20,
    marginBottom: 10,
  },
  highlightMsg: {
    height: 0.35,
    backgroundColor: '#687684',
  },
  msgWrapper: {},
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
