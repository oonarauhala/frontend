/* eslint-disable linebreak-style */
/* eslint-disable require-jsdoc */
/* eslint-disable no-unused-vars */
import {useState, useContext, useEffect} from 'react';
import {AsyncStorage} from 'react-native';
import {StateContext} from '../contexts/StateContext';

const mediaAPI = () => {
  const useFetch = (url) => {
    const [media, setMedia] = useContext(StateContext);
    const [loading, setLoading] = useState(true);
    async function fetchUrl() {
      const response = await fetch(url);
      const json = await response.json();
      setMedia(json);
      setLoading(false);
    }
    useEffect(() => {
      fetchUrl();
    }, []);
    return [media, loading];
  };

  return {
    useFetch,
  };
};

export default mediaAPI;
