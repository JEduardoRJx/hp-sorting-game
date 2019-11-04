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

    
  });

  describe('mapStateToProps', () => {

  });

  describe('mapDispatchToProps', () => {
    
  })
})