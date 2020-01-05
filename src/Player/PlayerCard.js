import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { getPlayerPropTypes } from './playerHelpers';
import { noop } from '../utils';

const useStyles = makeStyles({
  // TODO: Take a look at Mui docs -> System -> Flexbox.
  // and make sure that our styles are following their system.
  card: {
    minWidth: 275,
    minHeight: 300,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  title: {
    color: 'pink',
    borderBottom: '1px solid pink',
    fontSize: 18
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  }
});

// TODO: Find out if there is a performance benefit to splitting out the different props that
// `player` contains.
const PlayerCard = ({ player, onEditClick = noop }) => {
  const { name, hp, armor, damage, initiative } = player;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
          {name}
        </Typography>
        <Typography>Init: {initiative}</Typography>
        <Typography>Hp: {hp}</Typography>
        <Typography>Armor: {armor}</Typography>
        <Typography>Damage: {damage}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onEditClick(player)}>Edit</Button>
      </CardActions>
    </Card>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape(getPlayerPropTypes()),
  onEditClick: PropTypes.func
};

export default PlayerCard;
