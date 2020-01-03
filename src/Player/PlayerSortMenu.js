import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { noop } from '../utils';

// function SimpleMenu(props) {
// const {menuItems} = props;
// OR
// const menuItems = props.menuItems;
// }
export default function SimpleMenu({ menuItems, onChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleOpenClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = item => {
    (onChange || noop)(item);
    setAnchorEl(null);
  };

  // Example menuItem
  // const menuItem = {displayText: string; sortFn: function;}
  return (
    // Step 1. Accept an array of Menu Items as props.
    // Step 2. Map Menu Items to <MenuItem /> components.
    // Step 3. Accept an 'onChange' function prop.
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpenClick}>
        Open Menu
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={anchorEl}>
        {menuItems.map(item => (
          <MenuItem onClick={() => handleMenuItemClick(item)}>Sort by {item.displayText}</MenuItem>
        ))}
      </Menu>
    </div>
  );
}
