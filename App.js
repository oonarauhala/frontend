/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React from 'react';
import {MediaProvider} from './contexts/MediaContext';
import TabNavigator from './navigators/Navigator';


const App = () => {
  return (
    <MediaProvider>
      <TabNavigator></TabNavigator>
    </MediaProvider>
  );
};

export default App;
