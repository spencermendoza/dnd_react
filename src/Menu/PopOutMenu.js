import React from 'react';
// import { playerHelpers } from '../Player/playerHelpers';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { noop } from '../utils';

const useStyles = makeStyles({
  Box: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default function PopOutMenu({ menuItems, onChange = noop }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = item => {
    onChange(item);
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <div className={classes.Box}>
      <Button
        className={classes.Box}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleOpenClick}
      >
        Open Sort Options
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
      >
        {menuItems.map(item => (
          <MenuItem
            onClick={() => handleMenuItemClick(item)}
            key={item.displayText}
          >
            Sort by {item.displayText}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
