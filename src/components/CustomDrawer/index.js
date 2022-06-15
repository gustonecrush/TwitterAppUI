import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {PRIMARY_COLOR, SEC_TEXT_COLOR} from '../../utils.js';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

MaterialCommunityIcons.loadFont();

const CustomDrawer = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} contentContainerStyle={styles.drawer}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.user}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                style={styles.img}
                source={require('../../assets/images/users/user.png')}
              />
            </TouchableOpacity>

            <Text style={styles.name}>Farhan Augustiansyah</Text>
            <Text style={styles.username}>@gustonecrush</Text>
          </View>
          <View style={styles.others}>
            <TouchableOpacity style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name="dots-horizontal"
                size={25}
                color={PRIMARY_COLOR}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Following & Followers */}
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
        <View style={styles.lists}>
          <DrawerItemList {...props} />
        </View>
        <View style={styles.highlight}></View>
        <View style={styles.settings}>
          <Text style={styles.textSet}>Settings and privacy</Text>
          <Text style={styles.textSet}>Help Center</Text>
        </View>
        <View style={styles.iconBottomWrapper}>
          <TouchableOpacity>
            <Image source={require('../../assets/images/decors/idea.png')} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../../assets/images/decors/qr.png')} />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  drawer: {
    // backgroundColor: 'red',
  },
  header: {
    marginHorizontal: 25,
    marginTop: 5,
    flexDirection: 'row',
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: 17,
    marginTop: 15,
  },
  username: {
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    fontSize: 14,
  },
  iconWrapper: {
    width: 30,
    height: 30,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  followingWrapper: {
    flexDirection: 'row',
    marginHorizontal: 25,
    paddingVertical: 15,
  },
  ketWrapper: {
    marginRight: 10,
    flexDirection: 'row',
  },
  number: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    marginLeft: 5,
    color: SEC_TEXT_COLOR,
  },
  lists: {
    marginTop: -30,
    marginHorizontal: 10,
  },
  highlight: {
    height: 0.35,
    backgroundColor: SEC_TEXT_COLOR,
    marginTop: 10,
    marginBottom: 10,
  },
  settings: {
    marginHorizontal: 25,
    paddingVertical: 20,
  },
  textSet: {
    marginBottom: 5,
    fontFamily: 'Poppins-Regular',
    color: SEC_TEXT_COLOR,
    fontSize: 15,
  },
  iconBottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    alignItems: 'center',
    width: 220,
    position: 'absolute',
    bottom: -150,
  },
});
