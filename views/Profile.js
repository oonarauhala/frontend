/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Button, AsyncStorage} from 'react-native';
import {useState, useEffect} from 'react';

const Profile = (props) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared!');
    props.navigation.navigate('Auth');
  };
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Text>Username here!</Text>
      <Text>Email here!</Text>
      <Button title="Logout!"onPress={signOutAsync} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
});

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
