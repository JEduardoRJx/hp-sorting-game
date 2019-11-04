import { allCharacters } from './allCharacters';

describe('allCharacters', () => {

  it('should return the inital state', () => {
    const expected = [];
    const result = allCharacters(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return a new state when SET_CHAR is the case', () => {
    const action = {
      type: 'SET_CHAR',
      characters: [{
        bloodStatus: "pure-blood",
        deathEater: false,
        dumbledoresArmy: false,
        house: "Hufflepuff",
        ministryOfMagic: false,
        name: "Cedric Diggory",
        orderOfThePhoenix: false,
        role: "Student",
        school: "Hogwarts School of Witchcraft and Wizardry",
        species: "human",
        wand: 'Ash, 12 1/4", unicorn hair',
        __v: 0,
        _id: "5a1096253dc2080021cd875f"
      }]
    }
    const expected = [{
      bloodStatus: "pure-blood",
      deathEater: false,
      dumbledoresArmy: false,
      house: "Hufflepuff",
      ministryOfMagic: false,
      name: "Cedric Diggory",
      orderOfThePhoenix: false,
      role: "Student",
      school: "Hogwarts School of Witchcraft and Wizardry",
      species: "human",
      wand: 'Ash, 12 1/4", unicorn hair',
      __v: 0,
      _id: "5a1096253dc2080021cd875f"
    }]
    const result = allCharacters([], action);
    expect(result).toEqual(expected);
  })
})
