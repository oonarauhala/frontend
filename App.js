/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {MediaProvider} from './contexts/MediaContext';
import Home from './views/Home';
import TabNavigator from './navigators/Navigator';


const App = () => {
  return (
    <MediaProvider>
      <TabNavigator></TabNavigator>
    </MediaProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
});

export default App;
