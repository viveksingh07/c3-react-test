import * as actions from './index';
import { LOAD_INITIAL_PROFILES, DELETE_USER_PROFILE } from '../constants/Constants';
import { user, userProfilesList } from '../data/fixtures';

describe('actions', () => {

  it('creates an action to load initial profiles', () => {
    const expectedAction = {
      type: LOAD_INITIAL_PROFILES,
      userProfilesList
    };
    expect(actions.loadInitialProfiles(userProfilesList)).toEqual(expectedAction);
  });

  it('creates an action to delete selected user profile', () => {
      const userId = user.id;
      const expectedAction = {
        type: DELETE_USER_PROFILE,
        userId
      };
      expect(actions.deleteUserProfile(userId)).toEqual(expectedAction);
  });

});
