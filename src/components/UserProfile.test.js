import React from 'react';
import { shallow } from 'enzyme';

import { UserProfile } from './UserProfile';
import { user } from '../data/fixtures';

const props = {
  user,
  deleteUserProfile: jest.fn()
};

describe('UserProfile', () => {
  const userProfile = shallow(<UserProfile { ...props }/>);

  it('renders the image', () => {
      expect(userProfile.find('img').exists()).toBe(true);
  });

  it('renders the correct image', () => {
    expect(userProfile.find('img').prop('src')).toEqual(props.user.avatar);
  });

  it('renders the user name span', () => {
    expect(userProfile.find('span').at(0).exists()).toBe(true);
  });

  it('span has correct name of user', () => {
    expect(userProfile.find('span').at(0).text()).toEqual(`${props.user.first_name} ${props.user.last_name}`);
  });

  it('renders the delete link span', () => {
    expect(userProfile.find('span').at(1).exists()).toBe(true);
  });

  it('and delete link span has correct value', () => {
    expect(userProfile.find('span').at(1).text()).toEqual('Delete');
  });

  describe('and delete link is clicked', () => {

    beforeEach( () => {
      userProfile.find('span').at(1).simulate('click');
    });

    it('and delete link calls action', () => {
      expect(props.deleteUserProfile).toHaveBeenCalledTimes(1);
    });

  });

});
