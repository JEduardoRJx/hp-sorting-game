import { house } from './house';

describe('house', () => {
  it('should return the initial state', () => {
    const expected = '';
    const result = house(undefined, '')
    expect(result).toEqual(expected)
  });

  it('should return a new state when SET_HOUSE is the case', () => {
    const action = {
      type: 'SET_HOUSE',
      house: 'gryffindor'
    }
    const expected = 'gryffindor';
    const result = house('', action);
    expect(result).toEqual(expected);
  })
})