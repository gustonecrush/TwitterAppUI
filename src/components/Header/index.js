import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {PRIMARY_COLOR, SEC_TEXT_COLOR} from '../../utils.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

MaterialCommunityIcons.loadFont();
Feather.loadFont();

const Header = props => {
  const MidHeader = () => {
    if (props.page === 'Trends')
      return (
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color={'#687684'} />
          <TextInput placeholder="Search Twitter" style={styles.textInput} />
        </View>
      );
    if (props.page === 'Home')
      return (
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="twitter"
            color={PRIMARY_COLOR}
            size={30}
          />
        </TouchableOpacity>
      );
    if (props.page === 'Notifications' || props.page === 'Messages')
      return <Text style={styles.midHeaderText}>{props.page}</Text>;
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Menu */}
      {/* If clicked, It will show us the side bar menu */}
      <View style={styles.menuIcon}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.profileImg}
            source={require('../../assets/images/users/user.png')}
          />
        </TouchableOpacity>

        <View style={styles.activeStatus}></View>
      </View>

      {/* Mid Header Per Page */}
      <View style={styles.midHeader}>
        <MidHeader />
      </View>

      {/* Icon */}
      <TouchableOpacity style={styles.icon}>
        {props.page === 'Home' ? (
          <Image source={require('../../assets/images/decors/sparkle.png')} />
        ) : (
          <Feather name="settings" color={PRIMARY_COLOR} size={22} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    width: 35,
    height: 35,
  },
  profileImg: {
    width: 35,
    height: 35,
    borderRadius: 100,
  },
  activeStatus: {
    position: 'absolute',
    backgroundColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderColor: '#FFF',
    width: 10,
    height: 10,
    borderRadius: 50,
    top: 0,
    right: 0,
  },
  midHeaderText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  searchBar: {
    width: 251,
    height: 32,
    backgroundColor: '#E7ECF0',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 25,
  },
  textInput: {
    fontSize: 14,
    marginLeft: 8,
    color: '#687684',
    fontFamily: 'Poppins-Medium',
  },
});
