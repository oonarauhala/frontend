/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {AsyncStorage} from 'react-native';
import {Container, Header, Content, Text, Button} from 'native-base';
import {useState, useEffect} from 'react';

const Profile = (props) => {
  const signOutAsync = async () => {
    await AsyncStorage.clear();
    console.log('AsyncStorage cleared!');
    props.navigation.navigate('Auth');
  };
  return (
    <Container>
      <Header>
        <Text>Profile</Text>
      </Header>
      <Content>
        <Text>Username here!</Text>
        <Text>Email here!</Text>
      </Content>
      <Button onPress={signOutAsync} >
        <Text>Logout</Text>
      </Button>
    </Container>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
