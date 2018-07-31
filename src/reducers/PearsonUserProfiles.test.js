import reducer from './PearsonUserProfiles';
import { LOAD_INITIAL_PROFILES, ADD_MORE_PROFILES, DELETE_USER_PROFILE } from '../constants/Constants';

import { user, userProfilesList, request } from '../data/fixtures';

describe('PearsonUserProfiles', () => {

  it('handles LOAD_INITIAL_PROFILES by loading the user profile', () => {
    expect(reducer([], { type: LOAD_INITIAL_PROFILES, userProfilesList })).toEqual(userProfilesList);
  });

  it('handles ADD_MORE_PROFILES by adding a new user profile and verify uniqueness', () => {
    expect(reducer(userProfilesList, { type: ADD_MORE_PROFILES, payload: request }).length).toEqual(3); // first item in request.data.data is duplicated with existing application state userProfilesList
  });

  it('handles DELETE_USER_PROFILE by removing the user profile', () => {
    expect(reducer(userProfilesList, { type: DELETE_USER_PROFILE, userId: user.id })).toEqual([]);
  });

});
