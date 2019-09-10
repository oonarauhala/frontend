/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import {
  View,
} from 'react-native';
import List from '../components/List';
import {Container} from 'native-base';


const Home = (props) => {
  const {navigation} = props;
  return (
    <Container>
      <List navigation={navigation}></List>
    </Container>
  );
};

export default Home;
