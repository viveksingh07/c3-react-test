import React from 'react';
import { shallow } from 'enzyme';

import { PearsonUsers } from './PearsonUsers';
import { userProfilesList } from '../data/fixtures';

const props = {
  userProfilesList,
  addMoreProfiles: jest.fn()
 };

describe('PearsonUsers', () => {

  const pearsonUsers = shallow(<PearsonUsers {...props} />);

  it('renders the application title', () => {
    expect(pearsonUsers.find('h1').text()).toEqual('Pearson User Management');
  });

  describe('fetch profiles button', () => {

    it('is rendered', () => {
      expect(pearsonUsers.find('button').exists()).toBe(true);
    });

    it('and has expected text value', () => {
      expect(pearsonUsers.find('button').text()).toEqual('Fetch Profiles');
    });

    describe('is clicked', () => {

      beforeEach( () => {
        pearsonUsers.find('button').simulate('click');
      });

      it('and fetch profiles button calls action', () => {
        expect(props.addMoreProfiles).toHaveBeenCalledTimes(1);
      });

    });

  });

  describe('User Profiles List', () => {

    it('renders the correct number of User profile', () => {
      expect(pearsonUsers.find('Connect(UserProfile)').length).toEqual(props.userProfilesList.length);
    });

  });

});
