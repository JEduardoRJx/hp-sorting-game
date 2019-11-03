export const setCharacters = characters => ({
  type: 'SET_CHAR',
  characters
})

export const setGameCharacters = allCharacters => ({
  type: 'SET_GAME_CHAR',
  allCharacters
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})

export const setHouse = house => ({
  type: 'SET_HOUSE',
  house
})