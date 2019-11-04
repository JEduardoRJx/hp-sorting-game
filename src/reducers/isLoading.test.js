import { isLoading } from './isLoading';

describe('isLoading', () => {
  it('should return the initial state', () => {
    const expected = true;
    const result = isLoading(undefined, '')
    expect(result).toEqual(expected)
  });

  it('should return a new state when IS_LOADING is the case', () => {
    const action = {
      type: 'IS_LOADING',
      bool: false
    }
    const expected = false;
    const result = isLoading('', action);
    expect(result).toEqual(expected);
  })
})