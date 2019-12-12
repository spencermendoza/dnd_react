import React from 'react';
import Card from './Card';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid blue;
  width: 100%;
  padding: 15px;
`;

const CardContainer = ({ players }) => {
  return (
    <Container>
      {players.map((player, index) => (
        <Card player={player} />
      ))}
    </Container>
  );
};

CardContainer.propTypes = {
  players: PropTypes.array
};

export default CardContainer;
