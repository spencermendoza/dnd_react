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
    backgroundColor: '#fefefe',
    minWidth: 275,
    minHeight: 300,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2% 1%'
    // border: '2px solid black',
    // borderBottom: '1px solid black',
    // borderTop: '1px solid black'
  },
  title: {
    color: '#bada55',
    borderBottom: '4px solid pink',
    overflow: 'hidden',

    textOverflow: 'ellipsis'
    // fontSize: 18
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  activePlayer: {
    border: '2px solid black',
    borderBottom: '1px solid black',
    borderTop: '1px solid black',
    backgroundColor: '#fefefe',
    minWidth: 275,
    minHeight: 300,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '2% 1%'
  }
});

// TODO: Find out if there is a performance benefit to splitting out the different props that
// `player` contains.
const PlayerCard = ({
  player = {},
  onEditClick = noop,
  onToggleClick = noop
}) => {
  const { name, hp, armor, damage, initiative, active } = player;
  const classes = useStyles();
  let isActive = '';
  if (player.active === true) {
    isActive = classes.activePlayer;
  } else {
    isActive = classes.card;
  }
  return (
    <Card className={isActive}>
      <CardContent className={classes.content}>
        <Typography
          variant="h1"
          className={classes.title + ' name'}
          color="textSecondary"
          gutterBottom
        >
          {name}
        </Typography>
        <Typography className="initiative">Init: {initiative}</Typography>
        <Typography className="hp">Hp: {hp}</Typography>
        <Typography className="armor">Armor: {armor}</Typography>
        <Typography className="damage">Damage: {damage}</Typography>
      </CardContent>

      <CardActions>
        <Button onClick={() => onToggleClick(player)}>Click me!</Button>
        <Button className="edit-button" onClick={() => onEditClick(player)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape(getPlayerPropTypes()),
  onEditClick: PropTypes.func
};

export default PlayerCard;
