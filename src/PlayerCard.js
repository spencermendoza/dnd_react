import React from 'react';
import { PropTypes } from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  // TODO: Take a look at Mui docs -> System -> Flexbox.
  // and make sure that our styles are following their system.
  card: {
    minWidth: 275,
    minHeight: 300
  },
  title: {
    color: 'pink',
    borderBottom: '1px solid pink',
    fontSize: 18
  }
});

// TODO: Agree on using props as a parameter name
//          function MyComponent(props) {
//       OR destructuring the props object in the function signature to get parameter names.
//          function MyComponent({propA, propB ... propZ}) {
//
const PlayerCard = props => {
  const classes = useStyles();
  // TODO: Move the noop function to a utility functions file, or better yet,
  // just bring in ramda for utility fn's.
  // TODO: Separate props from state here.
  // TODO: Pass the player state to the `onEditClick` function passed as a prop.
  const onEditClick = props.onEditClick ? props.onEditClick : function noop() {};
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h1" className={classes.title} color="textSecondary" gutterBottom>
          {props.name}
        </Typography>
        <Typography>Init: {props.initValue}</Typography>
        <Typography>Hp: {props.hp}</Typography>
        <Typography>Armor: {props.armor}</Typography>
        <Typography>Damage: {props.damage}</Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => onEditClick(props)}>Edit</Button>
      </CardActions>
    </Card>
  );
};

// TODO: Bring in typescript.
// TODO: Find out if there is any benefit in
//       using React PropTypes if we're going to use
//       TypeScript.
PlayerCard.propTypes = {
  name: PropTypes.string,
  initValue: PropTypes.number,
  armor: PropTypes.number,
  damage: PropTypes.number,
  id: PropTypes.number,
  onEditClick: PropTypes.func
};

export default PlayerCard;
