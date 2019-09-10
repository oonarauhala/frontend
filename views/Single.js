/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';

const Single = (props) => {
  const fileName = props.navigation.getParam('file');
  const fileDescription = props.navigation.getParam('desc');
  const url = 'http://media.mw.metropolia.fi/wbma/uploads/' + fileName;
  return (
    <View>
      <Text>{fileDescription}</Text>
      <Image source={{uri: url}}></Image>
    </View>
  );
};

Single.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Single;
