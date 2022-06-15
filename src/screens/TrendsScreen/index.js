import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header} from '../../components';
import {HEIGHT, PRIMARY_COLOR, SEC_TEXT_COLOR} from '../../utils.js';

const TrendScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerWrapper}>
          <Header page="Trends" />
        </View>

        {/* Title Header */}
        <View style={styles.titleHeaderWrapper}>
          <Text style={styles.titleHeaderText}>Trends for you</Text>
        </View>

        {/* Main Trends */}
        <View style={styles.mainWrapper}>
          <Text style={styles.textBig}>No new trends for you</Text>
          <Text style={styles.descriptions}>
            It seems like there’s not a lot to show you right now, but you can
            see trends for other areas
          </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.textBtn}>Change Location</Text>
          </TouchableOpacity>
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

export default TrendScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E7ECF0',
  },
  headerWrapper: {
    paddingTop: HEIGHT * 0.075,
    paddingHorizontal: 25,
    paddingBottom: 20,
    backgroundColor: '#FFF',
  },
  titleHeaderWrapper: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderTopColor: '#E7ECF0',
    borderBottomColor: '#E7ECF0',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#FFF',
  },
  titleHeaderText: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
  },
  mainWrapper: {
    paddingVertical: 30,
    backgroundColor: '#FFF',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBig: {
    fontSize: 25,
    marginBottom: 15,
    fontFamily: 'Poppins-Bold',
  },
  descriptions: {
    fontSize: 13,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
    color: SEC_TEXT_COLOR,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#4C9EEB',
    borderRadius: 50,
    marginTop: 8,
  },
  textBtn: {
    color: '#FFF',
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
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
