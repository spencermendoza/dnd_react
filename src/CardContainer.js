import React from 'react';
import Card from './Card';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import PlayerCard from './PlayerCard';

const CardContainerWrapper = styled.div`
  background-color: #e8e8e8;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  padding: 0 3%;

  & > * {
    margin-top: 15px;
  }
`;

const CardContainer = ({ players }) => {
  return (
    <CardContainerWrapper>
      {players.map((player, props) => (
        <PlayerCard {...player} key={player.id.toString()} />
      ))}
    </CardContainerWrapper>
  );
};

CardContainer.propTypes = {
  players: PropTypes.array
};

export default CardContainer;
