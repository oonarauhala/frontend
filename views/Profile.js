/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Button, AsyncStorage} from 'react-native';
import {useState, useEffect} from 'react';

const Profile = (props) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared!');
    props.navigation.navigate('Auth');
  };
  return (
    <View>
      <Text>Profile</Text>
      <Text>Username here!</Text>
      <Text>Email here!</Text>
      <Button title="Logout!"onPress={signOutAsync} />
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
