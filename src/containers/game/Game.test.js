import React from 'react';
import { shallow } from 'enzyme';
import { Game, mapStateToProps, mapDispatchToProps } from './Game'
import { setCharacters, isLoading, setGameCharacters } from '../../actions';

describe('GameContainer', () => {

  describe('Game component', () => {
    let wrapper;
    const mockSetCharacters = jest.fn();
    const mockLoading = jest.fn();
    const mockSetGameCharacters = jest.fn();
    const mockAllCharacters = [{
      bloodStatus: "pure-blood",
      deathEater: false,
      dumbledoresArmy: false,
      house: "Hufflepuff",
      ministryOfMagic: false,
      name: "Cedric Diggory",
      orderOfThePhoenix: false,
      role: "Student",
      school: "Hogwarts School of Witchcraft, and Wizardry",
      species: "human",
      wand: 'Ash, 12 1/4", unicorn hair',
      __v: 0,
      _id: "5a1096253dc2080021cd875f"
    }];
    const mockIsLoading = true;
    const mockGameCharacters = [{
      bloodStatus: "pure-blood",
      deathEater: false,
      dumbledoresArmy: false,
      house: "Hufflepuff",
      ministryOfMagic: false,
      name: "Cedric Diggory",
      orderOfThePhoenix: false,
      role: "Student",
      school: "Hogwarts School of Witchcraft, and Wizardry",
      species: "human",
      wand: 'Ash, 12 1/4", unicorn hair',
      __v: 0,
      _id: "5a1096253dc2080021cd875f"
    }];
    const mockUser = {
      name: 'name',
      wizardkind: 'wizard',
      wand: 'wand',
      house: 'slytherin'
    };

    beforeEach(() => {
      wrapper = shallow(<Game 
        setCharacters={mockSetCharacters}
        loading={mockLoading}
        setGameCharacters={mockSetGameCharacters}
        characters={mockAllCharacters}
        gameCharacters={mockGameCharacters}
        isLoading={mockIsLoading}
        user={mockUser}
      />);  
    });
    
    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should be able to check answer', () => {
      const mockEvent = {
        target: {
          name: 'name'
        }
      }
      wrapper.instance().checkAnswer(mockEvent);
      expect(wrapper.state('index')).toEqual(1);
      expect(wrapper.state('correct')).toEqual(0);
      expect(wrapper.state('message')).toEqual('Try Again!');
      expect(wrapper.state('toggleModal')).toEqual('show');
    })
  });

  describe('mapStateToProps', () => {
    it('should return a gameCharacters array', () => {
      const mockState = {
        filter: 'SET_CHAR',
        gameCharacters: [{
          bloodStatus: "pure-blood",
          deathEater: false,
          dumbledoresArmy: false,
          house: "Hufflepuff",
          ministryOfMagic: false,
          name: "Cedric Diggory",
          orderOfThePhoenix: false,
          role: "Student",
          school: "Hogwarts School of Witchcraft, and Wizardry",
          species: "human",
          wand: 'Ash, 12 1/4", unicorn hair',
          __v: 0,
          _id: "5a1096253dc2080021cd875f"
        }]
      }
      const expected = {
        gameCharacters: [{
          bloodStatus: "pure-blood",
          deathEater: false,
          dumbledoresArmy: false,
          house: "Hufflepuff",
          ministryOfMagic: false,
          name: "Cedric Diggory",
          orderOfThePhoenix: false,
          role: "Student",
          school: "Hogwarts School of Witchcraft, and Wizardry",
          species: "human",
          wand: 'Ash, 12 1/4", unicorn hair',
          __v: 0,
          _id: "5a1096253dc2080021cd875f"
        }]
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });

    it('should return isLoading', () => {
      const mockState = {
        filter: 'IS_LOADING',
        isLoading: false
      }
      const expected = {
        isLoading: false
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    });

    it('should return an allCharacters array', () => {
      const mockState = {
        filter: 'SET_CHAR',
        allCharacters: [{
          bloodStatus: "pure-blood",
          deathEater: false,
          dumbledoresArmy: false,
          house: "Hufflepuff",
          ministryOfMagic: false,
          name: "Cedric Diggory",
          orderOfThePhoenix: false,
          role: "Student",
          school: "Hogwarts School of Witchcraft, and Wizardry",
          species: "human",
          wand: 'Ash, 12 1/4", unicorn hair',
          __v: 0,
          _id: "5a1096253dc2080021cd875f"
        }]
      }
      const expected = {
        allCharacters: [{
          bloodStatus: "pure-blood",
          deathEater: false,
          dumbledoresArmy: false,
          house: "Hufflepuff",
          ministryOfMagic: false,
          name: "Cedric Diggory",
          orderOfThePhoenix: false,
          role: "Student",
          school: "Hogwarts School of Witchcraft, and Wizardry",
          species: "human",
          wand: 'Ash, 12 1/4", unicorn hair',
          __v: 0,
          _id: "5a1096253dc2080021cd875f"
        }]
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    });

    it('should return user', () => {
      const mockState = {
        filter: 'SET_USER',
        user: {
          name: 'name',
          wizardkind: 'wizard',
          wand: 'wand',
          house: 'slytherin'
        }
      }
      const expected = {
        user: {
          name: 'name',
          wizardkind: 'wizard',
          wand: 'wand',
          house: 'slytherin'
        }
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with characters when setCharacters is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setCharacters([{
        bloodStatus: "pure-blood",
        deathEater: false,
        dumbledoresArmy: false,
        house: "Hufflepuff",
        ministryOfMagic: false,
        name: "Cedric Diggory",
        orderOfThePhoenix: false,
        role: "Student",
        school: "Hogwarts School of Witchcraft, and Wizardry",
        species: "human",
        wand: 'Ash, 12 1/4", unicorn hair',
        __v: 0,
        _id: "5a1096253dc2080021cd875f"
      }]);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setCharacters([{
        bloodStatus: "pure-blood",
        deathEater: false,
        dumbledoresArmy: false,
        house: "Hufflepuff",
        ministryOfMagic: false,
        name: "Cedric Diggory",
        orderOfThePhoenix: false,
        role: "Student",
        school: "Hogwarts School of Witchcraft, and Wizardry",
        species: "human",
        wand: 'Ash, 12 1/4", unicorn hair',
        __v: 0,
        _id: "5a1096253dc2080021cd875f"
      }]);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with boolean when isLoading is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoading(true);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.loading(true);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with allCharacters when gameCharacters is called', () => {
      const mockDispatch = jest.fn();
      const mockAllCharacters = [{
        bloodStatus: "pure-blood",
        deathEater: false,
        dumbledoresArmy: false,
        house: "Hufflepuff",
        ministryOfMagic: false,
        name: "Cedric Diggory",
        orderOfThePhoenix: false,
        role: "Student",
        school: "Hogwarts School of Witchcraft, and Wizardry",
        species: "human",
        wand: 'Ash, 12 1/4", unicorn hair',
        __v: 0,
        _id: "5a1096253dc2080021cd875f"
      }]
      const actionToDispatch = setGameCharacters(mockAllCharacters);
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setGameCharacters(mockAllCharacters);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
})