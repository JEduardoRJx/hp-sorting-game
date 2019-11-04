import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App'
import { fetchCharacters } from '../../apiCalls'
jest.mock('../../apiCalls');

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

  });

  describe('mapStateToProps', () => {

  });

  describe('mapDispatchToProps', () => {
    
  })
})