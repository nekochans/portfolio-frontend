import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  it('should be able to show Button', () => {
    const wrapper = shallow(<Button message="🐱" />);

    expect(wrapper.text()).toEqual('🐱');
  });
});
