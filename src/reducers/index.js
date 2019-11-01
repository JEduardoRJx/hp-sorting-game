import { combineReducers } from 'redux';
import { allCharacters } from './allCharacters';
import { gameCharacters } from './gameCharacters';
import { isLoading } from './isLoading'

const rootReducer = combineReducers({
  allCharacters,
  isLoading,
  gameCharacters
});

export default rootReducer;