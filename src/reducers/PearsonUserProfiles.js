import _ from 'lodash';

import { LOAD_INITIAL_PROFILES, ADD_MORE_PROFILES, DELETE_USER_PROFILE } from '../constants/Constants';

export default function (state = [], action) {
  switch(action.type){

    case LOAD_INITIAL_PROFILES:
      return action.userProfilesList;

    case ADD_MORE_PROFILES:
      return _.uniqBy( [...state, ...action.payload.data.data], 'id' );

    case DELETE_USER_PROFILE:
      return  _.filter( [...state], function(user) {
        return user.id !== action.userId;
      });

    default:
      return state;
  }
}
