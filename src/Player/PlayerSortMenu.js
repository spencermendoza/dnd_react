import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { noop } from '../utils';

// TODO: Move this to context somewhere.
const defaultMenuItems = [
  {
    displayText: 'Initiative Value',
    sortBy: 'initiative'
  },
  {
    displayText: 'HP',
    sortBy: 'hp'
  }
];

export default function SimpleMenu({ menuItems = defaultMenuItems, onChange = noop }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = item => {
    onChange(item);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenClick}>
        Open Menu
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}>
        {menuItems.map(item => (
          <MenuItem onClick={() => handleMenuItemClick(item)} key={item.displayText}>
            Sort by {item.displayText}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
