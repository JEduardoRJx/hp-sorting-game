import React from 'react';
import { shallow } from 'enzyme';
import MainScreen from './MainScreen'

describe('MainScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainScreen />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})