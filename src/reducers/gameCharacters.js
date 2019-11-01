export const gameCharacters = (state = [], action) => {
  switch(action.type) {
    case 'SET_GAME_CHAR':
      return action.gameCharacter;
    default:
      return state;
  }
}