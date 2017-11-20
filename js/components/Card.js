import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const Card = styled.View`
  flex: ${props => props.size};
  margin-top: 0;
  margin-bottom: 20;
  margin-left: 10;
  margin-right: 10;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  border-radius: 10;
  background-color: white;

  shadow-opacity: 0.3;
  shadow-radius: 3;

  elevation: 1;
`;

export default Card;
