import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlayerFormDialog from './PlayerFormDialog';
import { PlayerContext } from './PlayerContext';

configure({ adapter: new Adapter() });

describe('<PlayerFormDialog />', () => {
  it('renders', () => {
    const wrapper = shallow(
      <PlayerContext.Provider value={{ dialog: { player: {}, open: false } }}>
        <PlayerFormDialog />
      </PlayerContext.Provider>
    );

    expect(wrapper.find(PlayerFormDialog).exists()).toBeTruthy();
  });

  test.todo('has a field for each property of `player`');
  test.todo('does not render ');
  test.todo('does not render when `open` is falsey');
  test.todo('number fields only allow numbers');
  test.todo('updates player objects correctly');
  test.todo('calls its onConfirm prop fn');
  test.todo('calls onConfirmClick with a valid Player object');
  test.todo('calls its onCancel prop fn');
});
