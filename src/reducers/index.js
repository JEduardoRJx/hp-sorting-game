import { combineReducers } from 'redux';
import { allCharacters } from './allCharacters';
import { gameCharacters } from './gameCharacters';
import { isLoading } from './isLoading'
import { house } from './house';

const rootReducer = combineReducers({
  allCharacters,
  isLoading,
  gameCharacters,
  house
});

export default rootReducer;