import { combineReducers } from 'redux';
import { allCharacters } from './allCharacters';
import { gameCharacters } from './gameCharacters';
import { isLoading } from './isLoading'
import { house } from './house';
import { user } from './user';

const rootReducer = combineReducers({
  allCharacters,
  isLoading,
  gameCharacters,
  house,
  user
});

export default rootReducer;