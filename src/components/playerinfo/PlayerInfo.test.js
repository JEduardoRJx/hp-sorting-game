import React from 'react';
import { shallow } from 'enzyme';
import { PlayerInfo } from './PlayerInfo'

describe('PlayerInfo', () => {
  let wrapper;
  const mockUser = {
    name: 'name',
    wizardkind: 'wizard',
    wand: 'wand',
    house: 'slytherin'
  }

  beforeEach(() => {
    wrapper = shallow(<PlayerInfo 
    user={mockUser} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it.skip('should match user variables', () => {
    //Need to test line 6, 7, 8, & 9 of PlayerInfoComponent
  })
})