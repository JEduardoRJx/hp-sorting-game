export const isLoading = (state = true, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.bool
    default:
      return state
  }
}