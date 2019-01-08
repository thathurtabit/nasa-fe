import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import Item from './Item';

describe('Item', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<Item item={{}} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
