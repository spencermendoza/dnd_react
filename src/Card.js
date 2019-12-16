import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: Figure out how to use flex box to set
// the padding around the flex items, then remove
// the 'margin-top' property below. Maybe.
const CardWrapper = styled.div`
  background-color: #ffffff;
  flex: flex-basis;
  flex-basis: 10rem;
  justify-content: space-evenly;
  margin-top: 1rem;
  font-size: 1.5em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const CardDetail = styled.div`
  border-bottom: 1px solid #dcdcdc;
  flex: flex-basis;
  flex-basis: 3em;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 15px 5px;

  &:last-child {
    border-bottom: none;
  }
`;

const CardDetailName = styled.span`
  flex: flex-shrink;
  font-weight: bold;
`;

const CardDetailValue = styled.span`
  flex: flex-grow;
`;

// TODO: Replace the hardcoded array of strings and replace
// it with a Player -> Card mapping function or class.
const playerProperties = ['armor', 'init', 'hp', 'damage'];
const Card = ({ player, index }) => {
  return (
    <CardWrapper>
      <CardDetails>
        <CardDetail>
          <CardDetailName>Name</CardDetailName>
          <CardDetailValue>{player.name}</CardDetailValue>
        </CardDetail>
        {playerProperties.map(property => (
          <CardDetail key={property + index}>
            <CardDetailName>{property}</CardDetailName>
            <CardDetailValue>{player[property]}</CardDetailValue>
          </CardDetail>
        ))}
      </CardDetails>
    </CardWrapper>
  );
};

// TODO: Bring in typescript or research PropTypes
// so that we can enforce the presence of required
// properties on 'player'.
Card.propTypes = {
  name: PropTypes.string,
  armor: PropTypes.number,
  hp: PropTypes.number,
  init: PropTypes.number,
  damage: PropTypes.number
};

export default Card;
