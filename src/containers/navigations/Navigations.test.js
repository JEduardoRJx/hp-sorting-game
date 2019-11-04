import React from 'react';
import { shallow } from 'enzyme';
import { Navigations, mapStateToProps, mapDispatchToProps } from './Navigations';
import { fetchSortingHat } from '../../apiCalls'
jest.mock('../../apiCalls');
import { setGameCharacters, setHouse, isLoading } from '../../actions';

describe('NavigationsContainer', () => {

  describe('Navigations Component', () => {
    let wrapper;
    const mockSetGameCharacters = jest.fn();
    const mockLoading = jest.fn();
    const mockSetHouse = jest.fn();
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
    const mockUser = {
      name: 'name',
      wizardkind: 'wizard',
      wand: 'wand',
      house: 'slytherin'
    }
    fetchSortingHat.mockImplementation(() => Promise.resolve('slytherin'))

    beforeEach(() => {
      wrapper = shallow (<Navigations 
        allCharacters={mockAllCharacters}
        user={mockUser}
        setGameCharacters={mockSetGameCharacters}
        loading={mockLoading}
        setHouse={mockSetHouse}
      />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should setHouse when selectHouse is called', () => {
      wrapper.instance().selectHouse();
      expect(fetchSortingHat).toHaveBeenCalled();
      expect(mockLoading).toHaveBeenCalledWith(true);
    });

    it('should call setGameCharacters on click', () => {
      wrapper.find('NavLink').at(1).simulate('click');
      expect(mockSetGameCharacters).toHaveBeenCalled();
    })
  });

  describe('mapStateToProps', () => {
    
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
  });
});


  describe('mapDispatchToProps', () => {
    
    it('calls dispatch with characters when setGameCharacters is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setGameCharacters([{
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

      mappedProps.setGameCharacters([{
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

    it('calls dispatch with a house when setHouse is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = setHouse('slytherin');
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setHouse('slytherin');
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
});