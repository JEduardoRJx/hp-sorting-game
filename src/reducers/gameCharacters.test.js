import { gameCharacters } from './gameCharacters';

describe('gameCharacters', () => {

  it('should return the inital state', () => {
    const expected = [];
    const result = gameCharacters(undefined, []);
    expect(result).toEqual(expected);
  });

  it.skip('should return a new state when SET_GAME_CHAR is the case', () => {
    const action = {
      type: 'SET_GAME_CHAR',
      allCharacters: [{
        house: "Hufflepuff",
        name: "Cedric Diggory",
      },
      {
        house: "Hufflepuff",
        name: "Cedric",
      },
      {
        house: "Hufflepuff",
        name: "Diggory",
      },
      {
        house: "Hufflepuff",
        name: "Ced",
      },
      {
        house: "Hufflepuff",
        name: "C",
      },
      {
        house: "Hufflepuff",
        name: "Dig",
      },
      {
        house: "Hufflepuff",
        name: "ric",
      },
      {
        house: "Hufflepuff",
        name: "CD",
      },
      {
        house: "Hufflepuff",
        name: "CY",
      },
      {
        house: "Hufflepuff",
        name: "DC"
      }]
    }
    const expected = 10;
    const result = gameCharacters([], action)
    expect(result.length).toEqual(expected);
  })
})