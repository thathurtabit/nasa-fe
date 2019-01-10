import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import FilterBar from './FilterBar';

describe('FilterBar', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<FilterBar />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
