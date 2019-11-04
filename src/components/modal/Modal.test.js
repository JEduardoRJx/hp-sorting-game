import React from 'react';
import { shallow } from 'enzyme';
import Modal from './Modal'

describe('MainScreen', () => {
  let wrapper;
  const mockCloseModal = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Modal
      closeModal={mockCloseModal} />)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call mockCloseModal when image is clicked', () => {
    wrapper.find('.modal-img').simulate('click');
    expect(mockCloseModal).toHaveBeenCalled()
  });
})