/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import {Image} from 'react-native';
import {Container, Text, Content, Card, CardItem} from 'native-base';

const Single = (props) => {
  const fileName = props.navigation.getParam('file');
  const fileDescription = props.navigation.getParam('desc');
  const url = 'http://media.mw.metropolia.fi/wbma/uploads/' + fileName;
  return (
    <Container>
      <Content>
        <Card>
          <CardItem>
            <Text>{fileDescription}</Text>
            <Image source={{uri: url}}style={{height: 200, width: 200}}></Image>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

Single.propTypes = {
  navigation: PropTypes.object.isRequired,
};
export default Single;
