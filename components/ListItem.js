/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const getThumbnail = (url) => {
  const [thumbnails, setThumbnails] = useState({});
  async function fetchUrl() {
    const response = await fetch('http://media.mw.metropolia.fi/wbma/media/' + url);
    const json = await response.json();
    setThumbnails(json.thumbnails);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return thumbnails;
};

const ListItem = (props) => {
  const {navigation, singleMedia} = props;
  const tn = getThumbnail(props.singleMedia.file_id);
  return (
    <TouchableOpacity style={styles.row}
      onPress={
        ()=> {
          navigation.push('Single', {file: singleMedia.filename, desc: singleMedia.description});
        }
      }>
      <View style={styles.imagebox}>
        {tn && <Image
          style={styles.image}
          source={{uri: 'http://media.mw.metropolia.fi/wbma/uploads/' + tn.w160}}
        />}
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}> {props.singleMedia.title} </Text>
        <Text> {props.singleMedia.description} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row-reverse',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 16,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default ListItem;
