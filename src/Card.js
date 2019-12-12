import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO: Figure out how to use flex box to set
// the padding around the flex items, then remove
// the 'margin-top' property below. Maybe.
const CardWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid purple;
  flex: flex-basis;
  flex-basis: 10rem;
  justify-content: space-evenly;
  margin-top: 1rem;
  font-size: 1.5em;

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .detail {
    border-bottom: 1px solid black;
    flex: flex-basis;
    flex-basis: 3em;

    & :first-of-type {
      font-weight: bold;
    }

    & :last-of-type {
      text-align: right;
    }
  }
`;

const Card = ({ player, index }) => {
  console.log('props.index?', index);
  const playerDetails = ['name', 'armor', 'hp', 'init', 'damage'];
  return (
    <CardWrapper>
      <div className="details">
        {playerDetails.map(detail => (
          <div className="detail" key={detail}>
            <span>{detail}</span>
            <span>{player[detail]}</span>
          </div>
        ))}
      </div>
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
