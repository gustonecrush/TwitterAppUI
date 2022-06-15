import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';

EvilIcons.loadFont();
Feather.loadFont();

const FeedbackBar = ({comment, retweet, love}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <EvilIcons name="comment" size={25} color={'#687684'} />
        </TouchableOpacity>
        <Text style={styles.text}>{comment}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <EvilIcons name="retweet" size={27} color={'#687684'} />
        </TouchableOpacity>
        <Text style={styles.text}>{retweet}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <EvilIcons name="heart" size={25} color={'#687684'} />
        </TouchableOpacity>
        <Text style={styles.text}>{love}</Text>
      </View>
      <View style={styles.iconWrapper}>
        <TouchableOpacity>
          <Feather name="share" size={18} color={'#687684'} />
        </TouchableOpacity>
        <Text style={styles.text}></Text>
      </View>
    </View>
  );
};

export default FeedbackBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  text: {
    color: '#687684',
    fontFamily: 'Poppins-Regular',
    fontSize: 11,
  },
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
