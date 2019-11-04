import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { fetchCharacters } from '../../apiCalls'
jest.mock('../../apiCalls');
import { setCharacters, isLoading } from '../../actions'

describe('AppContainer', () => {

  describe('App component', () => {
    let wrapper;
    const mockSetCharacters = jest.fn();
    const mockLoading = jest.fn();
    const mockCharacters = [{
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
    const mockIsLoading = true;
    const mockUser = {
      name: 'name',
      wizardkind: 'wizard',
      wand: 'wand',
      house: 'slytherin'
    }
    fetchCharacters.mockImplementation(() => Promise.resolve(mockCharacters))

    beforeEach(() => {
      wrapper = shallow (<App 
      setCharacters={mockSetCharacters}
      loading={mockLoading}
      allCharacters={mockCharacters}
      isLoading={true}
      user={mockUser}
      />)
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should setCharacters when fetchCharacters is called', () => {
      expect(fetchCharacters).toHaveBeenCalled();
      expect(mockSetCharacters).toHaveBeenCalledWith(mockCharacters);
      expect(mockLoading).toHaveBeenCalledWith(false);
    });

    it.skip('should be able to close the modal', () => {
      //setup
      const mockModal = {
        querySelector: jest.fn()
      }
      const mockModalContents = {
        querySelector: jest.fn(),
        style: {
          display: 'none'
        }
      }
      const mockModalGif = {
        querySelector: jest.fn(),
        style: {
          display: 'block'
        }
      }
      const mockSetTimeOut = jest.fn();
      //execution
      wrapper.instance().closeModal();
      //expectation
      expect(mockModal.querySelector).toHaveBeenCalled();
      expect(mockModalContents.querySelector).toHaveBeenCalled();
    });

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
  });

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

    it('calls dispatch with boolean when loading is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = isLoading(true);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.loading(true);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });
})