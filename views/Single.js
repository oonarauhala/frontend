/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, Image} from 'react-native';

const Single = (props) => {

  const fileName = props.navigation.getParam('file');
  const fileDescription = props.navigation.getParam('desc');
  const url = 'http://media.mw.metropolia.fi/wbma/uploads/' + fileName;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{fileDescription}</Text>
      <Image style={styles.image} source={{uri: url}}></Image>
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
  image: {
    height: 300,
    width: 300,
    borderRadius: 15,
    padding: 10,
  },
  text: {
    alignContent: 'center',
    padding: 10,
    fontSize: 20,
  },
});


Single.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Single;
