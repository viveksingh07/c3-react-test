import axios from 'axios';
import { LOAD_INITIAL_PROFILES, ADD_MORE_PROFILES, DELETE_USER_PROFILE } from '../constants/Constants';

const ROOT_URL = `https://reqres.in/api/users?page=1&per_page=10`;

export function loadInitialProfiles(userProfilesList) {
  return {
      type: LOAD_INITIAL_PROFILES,
      userProfilesList
  };
}

export function addMoreProfiles() {
  const request = axios.get(ROOT_URL);
  return {
      type: ADD_MORE_PROFILES,
      payload: request
  };
}

export function deleteUserProfile(userId) {
  return {
      type: DELETE_USER_PROFILE,
      userId
  };
}
