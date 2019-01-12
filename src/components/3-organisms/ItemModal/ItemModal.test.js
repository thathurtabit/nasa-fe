import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import { ItemModal } from './ItemModal';

describe('ItemModal', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <ItemModal location="myLocation" items={[{}]} />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
