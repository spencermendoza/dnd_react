import React from 'react';
import Card from './Card';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const CardContainerWrapper = styled.div`
  background-color: #e8e8e8;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  padding: 0 3%;
`;

const CardContainer = ({ players }) => {
  return (
    <CardContainerWrapper>
      {players.map((player, index) => (
        <Card player={player} key={index} index={index} />
      ))}
    </CardContainerWrapper>
  );
};

CardContainer.propTypes = {
  players: PropTypes.array
};

export default CardContainer;
