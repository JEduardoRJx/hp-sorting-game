import { user } from './user';

describe('user', () => {
  it('should return the initial state', () => {
    const expected = {};
    const result = user(undefined, {})
    expect(result).toEqual(expected)
  });

  it('should return a new state when SET_USER is the case', () => {
    const action = {
      type: 'SET_USER',
      user: {
        name: 'name'
      }
    }
    const expected = {
      name: 'name'
    };
    const result = user('', action);
    expect(result).toEqual(expected);
  })
})