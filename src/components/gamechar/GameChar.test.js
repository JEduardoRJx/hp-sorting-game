import React from 'react';
import { shallow } from 'enzyme';
import { GameChar, mapStateToProps } from './GameChar';

describe ('GameChar', () => {

  describe('GameChar component', () => {
    let wrapper;
    const mockState = {
      state: {
        index: 0,
        message: 'message',
        toggleModal: 'show'
      }
    }
    const mockCheckAnswer = jest.fn();
    const mockUser = {
      name: 'name',
      wizardkind: 'wizard',
      wand: 'wand',
      house: 'slytherin'
    }

    beforeEach(() => {
      wrapper = shallow(<GameChar 
        character={mockState.index} 
        isLoading={true}
        checkAnswer={mockCheckAnswer} 
        message={mockState.message} 
        toggleModal={mockState.toggleModdal} 
        user={mockUser}
        />)
    })

    it('should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it.skip('should call the checkAnswer prop when an image is clicked on', () => {
      wrapper.find('img').simulate('click');
      expect(checkAnswer).toHaveBeenCalled();
    })

  });

    describe('mapStateToProps', () => {
      it('should return a user object', () => {
        const mockState = {
          filter: 'SET_USER',
          user: {
            name: 'name',
            wizardkind: 'wizard',
            house: 'house',
            wand: 'wand'
          }
        }
        const expected = {
          user: {
            name: 'name',
            wizardkind: 'wizard',
            house: 'house',
            wand: 'wand'
          }
        }
        const mappedProps = mapStateToProps(mockState);
        expect(mappedProps).toEqual(expected);
      });
    })
});