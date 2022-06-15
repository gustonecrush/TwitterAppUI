import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import BottomNavigator from '../components/BottomNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

FontAwesome.loadFont();
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();

import {
  SplashScreen,
  HomeScreen,
  TrendScreen,
  NotificationsScreen,
  MessagesScreen,
  ProfileScreen,
  ListsScreen,
  TopicsScreen,
  MomentsScreen,
} from '../screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
import {createDrawerNavigator} from '@react-navigation/drawer';
import BookmarksScreen from '../screens/BookmarksScreen';
import {CustomDrawer} from '../components';
import {SEC_TEXT_COLOR} from '../utils.js';
const Drawer = createDrawerNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Trends"
        component={TrendScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={MessagesScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      initialRouteName="SplashScreen">
      <Drawer.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false, drawerLabel: () => null}}
      />
      <Drawer.Screen
        name="Tweets"
        component={MainApp}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <AntDesign name="retweet" size={20} color={SEC_TEXT_COLOR} />
          ),
          drawerLabelStyle: {marginLeft: -22, fontFamily: 'Poppins-Regular'},
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome name="user-o" size={20} color={SEC_TEXT_COLOR} />
          ),
          drawerLabelStyle: {marginLeft: -20, fontFamily: 'Poppins-Regular'},
        }}
      />
      <Drawer.Screen
        name="Lists"
        component={ListsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome name="list-ul" size={20} color={SEC_TEXT_COLOR} />
          ),
          drawerLabelStyle: {marginLeft: -20, fontFamily: 'Poppins-Regular'},
        }}
      />
      <Drawer.Screen
        name="Topics"
        component={TopicsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <AntDesign name="message1" size={20} color={SEC_TEXT_COLOR} />
          ),
          drawerLabelStyle: {marginLeft: -22, fontFamily: 'Poppins-Regular'},
        }}
      />
      <Drawer.Screen
        name="Bookmarks"
        component={BookmarksScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <FontAwesome name="bookmark-o" size={20} color={SEC_TEXT_COLOR} />
          ),
          drawerLabelStyle: {marginLeft: -20, fontFamily: 'Poppins-Regular'},
        }}
      />
      <Drawer.Screen
        name="Moments"
        component={MomentsScreen}
        options={{
          headerShown: false,
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={25}
              color={SEC_TEXT_COLOR}
            />
          ),
          drawerLabelStyle: {marginLeft: -20, fontFamily: 'Poppins-Regular'},
        }}
      />
    </Drawer.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
