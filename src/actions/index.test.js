import * as actions from '../actions'

describe('actions', () => {

  it('should have type of SET_CHAR', () => {
    const characters =[{
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
    }];
    const expectedAction = {
      type: 'SET_CHAR',
      characters
    }
    const result = actions.setCharacters(characters);
    expect(result).toEqual(expectedAction);
  });

  it('should have type of SET_GAME_CHAR', () => {
    const allCharacters =[{
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
    }];
    const expectedAction = {
      type: 'SET_GAME_CHAR',
      allCharacters
    }
    const result = actions.setGameCharacters(allCharacters);
    expect(result).toEqual(expectedAction);
  });

  it('should have type of IS_LOADING', () => {
    const bool = true;
    const expectedAction = {
      type: 'IS_LOADING',
      bool
    }
    const result = actions.isLoading(bool);
    expect(result).toEqual(expectedAction);
  });

  it('should have type of SET_HOUSE', () => {
    const house = 'Slytherin';
    const expectedAction = {
      type: 'SET_HOUSE',
      house
    }
    const result = actions.setHouse(house);
    expect(result).toEqual(expectedAction);
  });

  it('should have type of SET_USER', () => {
    const user = {
      name: 'Harry',
      wizardkind: 'Wizard',
      wand: 'wand',
      house: 'Slytherin'
    }
    const expectedAction = {
      type: 'SET_USER',
      user
    }
    const result = actions.setUser(user);
    expect(result).toEqual(expectedAction);
  });
})