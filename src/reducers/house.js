export const house = (state = '', action) => {
  switch(action.type) {
    case 'SET_HOUSE':
      return action.house;
    default:
      return state;
  }
}