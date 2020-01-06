import React from 'react';
import PlayerCard from './PlayerCard';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// TODO: Move this to a pretest file somewhre.
configure({ adapter: new Adapter() });

describe('<PlayerCard />', () => {
  it('renders', () => {
    const player = { name: 'Austin', id: 1, hp: 26, armor: 99, damage: 98, initiative: 991 };
    const wrapper = shallow(<PlayerCard player={player} />);

    expect(wrapper).toBeTruthy();
  });

  it('displays player attributes', () => {
    const player = { name: 'Austin', hp: 26, armor: 99, damage: 98, initiative: 991 };
    const wrapper = shallow(<PlayerCard player={player} />);

    // TODO: Figure out a better way to reference children
    // without tying the tests to the implementation too much.
    expect(wrapper.find('.name').exists()).toBeTruthy();
    expect(wrapper.find('.name').text()).toMatch(new RegExp('Austin'));

    expect(wrapper.find('.hp').exists()).toBeTruthy();
    expect(wrapper.find('.hp').text()).toMatch(new RegExp('26'));

    expect(wrapper.find('.armor').exists()).toBeTruthy();
    expect(wrapper.find('.armor').text()).toMatch(new RegExp('99'));

    expect(wrapper.find('.damage').exists()).toBeTruthy();
    expect(wrapper.find('.damage').text()).toMatch(new RegExp('98'));

    expect(wrapper.find('.initiative').exists()).toBeTruthy();
    expect(wrapper.find('.initiative').text()).toMatch(new RegExp('991'));
  });

  it('calls its onEditClick prop function', () => {
    const player = { name: 'Austin', id: 1, hp: 26, armor: 99, damage: 98, initiative: 991 };
    const testFn = jest.fn();
    const wrapper = shallow(<PlayerCard player={player} onEditClick={testFn} />);
    const button = wrapper.find('.edit-button');

    button.simulate('click');
    expect(testFn.mock.calls.length).toBeGreaterThan(0);
  });
});
