import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {PRIMARY_COLOR} from '../../utils.js';

MaterialCommunityIcons.loadFont();

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Tweets');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.page}>
      <MaterialCommunityIcons name="twitter" color="#FFF" size={120} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
});
