import React from 'react';
import { shallow } from 'enzyme';
import HeaderImage from '../HeaderImage';
import HeaderImageTestProps from './HeaderImageTestProps';

describe('HeaderImage', () => {
  it('should be able to show HeaderImage', () => {
    const wrapper = shallow(<HeaderImage {...HeaderImageTestProps} />);

    expect(wrapper.text()).toEqual(
      'nekochansWe are a Freelance Web Engineer Organization.https://github.com/nekochans',
    );
  });
});
