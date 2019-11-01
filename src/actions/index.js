export const setCharacters = characters => ({
  type: 'SET_CHAR',
  characters
})

export const setGameCharacters = characters => ({
  type: 'SET_GAME_CHAR',
  characters
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  bool
})