/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
import React from 'react';
import {TextInput} from 'react-native';
import PropTypes from 'prop-types';


const FormTextInput = (props) => {
  const {...otherProps} = props;
  return (
    <TextInput

      {...otherProps}
    />
  );
};

export default FormTextInput;
