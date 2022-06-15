import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PRIMARY_COLOR, SEC_TEXT_COLOR} from '../../utils.js';

Feather.loadFont();
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Home')
      return isFocused ? (
        <Image
          style={styles.homeIcon}
          source={require('../../assets/images/icons/home-active.png')}
        />
      ) : (
        <Image
          style={styles.homeIcon}
          source={require('../../assets/images/icons/home.png')}
        />
      );
    if (label === 'Trends')
      return isFocused ? (
        <Feather name="search" color={PRIMARY_COLOR} size={25} />
      ) : (
        <Feather name="search" color={SEC_TEXT_COLOR} size={25} />
      );
    if (label === 'Notifications')
      return isFocused ? (
        <Ionicons
          name="ios-notifications-outline"
          color={PRIMARY_COLOR}
          size={25}
        />
      ) : (
        <Ionicons
          name="ios-notifications-outline"
          color={SEC_TEXT_COLOR}
          size={25}
        />
      );
    if (label === 'Messages')
      return isFocused ? (
        <MaterialCommunityIcons
          name="email-outline"
          color={PRIMARY_COLOR}
          size={25}
        />
      ) : (
        <MaterialCommunityIcons
          name="email-outline"
          color={SEC_TEXT_COLOR}
          size={25}
        />
      );
    return (
      <MaterialCommunityIcons
        name="email-outline"
        color={SEC_TEXT_COLOR}
        size={25}
      />
    );
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  homeIcon: {
    width: 25,
    height: 25,
  },
});
