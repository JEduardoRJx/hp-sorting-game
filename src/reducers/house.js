export const house = (state = '', action) => {
  switch(action.type) {
    case 'SET_HOUSE':
      const house = action.house
      return house.toLowerCase();
    default:
      return state;
  }
}