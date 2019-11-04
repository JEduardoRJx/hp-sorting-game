import React from 'react';
import { shallow } from 'enzyme';
import { DiscoverHouse, mapStateToProps, mapDispatchToProps } from './DiscoverHouse';
import { setUser } from '../../actions';

describe('DiscoverHouseContainer', () => {

  describe('DiscoverHouse component', () => {
    let wrapper;
    const mockSetUser = jest.fn();
    const mockHouse = 'Slytherin'
    const mockUser = {
      name: 'name',
      wizardkind: 'wizard',
      wand: 'wand',
      house: 'slytherin'
    }
    
    beforeEach(() => {
      wrapper = shallow (<DiscoverHouse 
        setUser={mockSetUser} 
        house={mockHouse}
        user={mockUser}
      />);
    });

    it('should match snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should update state when handleName is called',() => {
      const mockEvent = {
        target: {
          value: 'name'
        }
      }
      const expected = 'name'
      wrapper.instance().handleName(mockEvent)
      expect(wrapper.state('name')).toEqual(expected);
    });

    it('should update state when handleWizardKindAndWand is called',() => {
      const mockEvent = {
        target: {
          name: 'wand',
          value: 'magical wand'
        }
      }
      const expected = 'magical wand'
      wrapper.instance().handleWizardkindAndWand(mockEvent)
      expect(wrapper.state('wand')).toEqual(expected);
    });

    it.skip('should create a new user when handleUser is called', () => {
      const mockUser = {
        name: 'name',
        wizardkind: 'wizard',
        wand: 'magical wand',
        house: 'slytherin'
      }
      wrapper.instance().handleUser();
      expect(mockSetUser).toHaveBeenCalledWith(mockUser)
    });

    it('should update state when clearInputs is called', () => {
      const mockstate = {
        name: 'name',
        wizardkind: 'wizard',
        wand: 'wand',
        house: 'slythering'
      }
      const expected = ''
      wrapper.instance().clearInputs()
      expect(wrapper.state('name')).toEqual(expected);
    });


  });

  describe('mapStateToProps', () => {

    it('should return a user', () => {
      const mockState = {
        filter: 'SET_HOUSE',
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

    it('should return a house', () => {
      const mockState = {
        filter: 'SET_HOUSE',
        house: 'slytherin'
      }
      const expected = {
        house: 'slytherin'
      }
      const mappedProps = mapStateToProps(mockState);
      expect(mappedProps).toEqual(expected);
    })

  });

  describe('mapDispatchToProps', () => {
    it('calls setUser with a user object', () => {
      const mockDispatch = jest.fn();
      const user = {
        name: 'name',
        wand: 'wand',
        wizardkind: 'wizardkind',
        house: 'slythering'
      }
      const actionToDispatch = setUser(user);

      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.setUser(user);
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
})