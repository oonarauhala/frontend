/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React from 'react';
import {Container, 
  Text, Header, Content, Card, CardItem, Button} from 'native-base';
import FormTextInput from '../components/FormTextInput';
import useSignUpForm from '../hooks/LoginHooks';
import {AsyncStorage} from 'react-native';

const Login = (props) => { // props is needed for navigation
  const signInAsync = async (url, data) => {
    // async fetch:
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    const json = await response.json();
    await AsyncStorage.setItem('userToken', json.token);
    // setting user data to asyncStorege (not sure if working)
    await AsyncStorage.setItem('user', JSON.stringify(json.user));
    props.navigation.navigate('App');
  };
  const {inputs, handleUsernameChange, handlePasswordChange} = useSignUpForm();
  return (
    <Container>
      <Header>
        <Text>Login</Text>
      </Header>
      
      <Content>
        <FormTextInput
          onChangeText={handleUsernameChange}
          value={inputs.username}/>
        <FormTextInput
          autoCapitalize='none'
          placeholder='password'
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
          value={inputs.password} />
      </Content>
      <Button onPress={
        () => {
          // eslint-disable-next-line quotes
          signInAsync('http://media.mw.metropolia.fi/wbma/login', inputs);
        }
      }>
        <Text>
          Log in!
        </Text>
      </Button>
    </Container>
  );
};

// proptypes here

export default Login;
