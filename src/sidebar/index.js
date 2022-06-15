import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from '../components/BottomNavigator';

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
import BookmarksScreen from '../screens/BookmarksScreen';

const Drawer = createDrawerNavigator();

const Sidebar = () => {
  return (
    <Drawer.Navigator initialRouteName="SplashScreen">
      <Drawer.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="ListsScreen"
        component={ListsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="TopicsScreen"
        component={TopicsScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="BookmarksScreen"
        component={BookmarksScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="MomentsScreen"
        component={MomentsScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default Sidebar;

const styles = StyleSheet.create({});
