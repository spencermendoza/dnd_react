import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Player from '../Player/Player';

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

// TODO: Agree on using props as a parameter name
//          function MyComponent(props) {                                  <--- I like this one
//       OR destructuring the props object in the function signature to get parameter names.
//          function MyComponent({propA, propB ... propZ}) {
//
const PlayerCard = props => {
  const classes = useStyles();
  // TODO: Move the noop function to a utility functions file, or better yet,
  // just bring in ramda for utility fn's.
  // TODO: Separate props from state here.
  // TODO: Pass the player state to the `onEditClick` function passed as a prop.
  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
          {props.player.name}
        </Typography>
        <Typography>Init: {props.player.initiative}</Typography>
        <Typography>Hp: {props.player.hp}</Typography>
        <Typography>Armor: {props.player.armor}</Typography>
        <Typography>Damage: {props.player.damage}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => props.onEditClick({ ...props.player })}>Edit</Button>
      </CardActions>
    </Card>
  );
};

// TODO: Bring in typescript.
// TODO: Find out if there is any benefit in
//       using React PropTypes if we're going to use
//       TypeScript.
PlayerCard.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string,
    initiative: PropTypes.number,
    armor: PropTypes.number,
    damage: PropTypes.number,
    id: PropTypes.number
  }),
  onEditClick: PropTypes.func
};

export default PlayerCard;
