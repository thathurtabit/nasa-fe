import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import ItemList from './ItemList';

describe('ItemList', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<ItemList items={['string']} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
