import { combineReducers } from 'redux';
import PearsonUserProfiles from './PearsonUserProfiles';

const rootReducer = combineReducers({
  userProfilesList: PearsonUserProfiles
});

export default rootReducer;
