/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  AsyncStorage,
} from 'react-native';
import FormTextInput from '../components/FormTextImput';

const Login = (props) => { // props is needed for navigation
  const signInAsync = async (url, data) => {
    // async fetch:
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json);
    await AsyncStorage.setItem('userToken', json.token);
    props.navigation.navigate('App');
  };
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View style={styles.form}>
        <FormTextInput
          autoCapitalize='none'
          placeholder='username' />
        <FormTextInput
          autoCapitalize='none'
          placeholder='password'
          secureTextEntry={true} />
      </View>
      <Button title="Sign in!" onPress={
        () => {
          // eslint-disable-next-line quotes
          signInAsync('http://media.mw.metropolia.fi/wbma/login', {"username": "john", "password": "examplepass"});
          console.log('signInAsync success!');
        }
      } />
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

// proptypes here

export default Login;
