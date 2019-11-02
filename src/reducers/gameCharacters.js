export const gameCharacters = (state = [], action) => {
  switch(action.type) {
    case 'SET_GAME_CHAR':
      const charsInHouses = action.allCharacters.filter(char => 'house' in char)
      let gameCharacters = [];
      const selectCharacter = () => {
        while (gameCharacters.length < 10) {
          let randomCharacter = charsInHouses[Math.floor(Math.random()*charsInHouses.length)]
          gameCharacters.push(randomCharacter)
          selectCharacter();
        }
      }
      selectCharacter();
      return gameCharacters
    default:
      return state;
  }
}