export const allCharacters = (state = [], action) => {
  switch(action.type) {
    case 'SET_CHAR':
      return action.characters;
    default:
      return state;
  }
}