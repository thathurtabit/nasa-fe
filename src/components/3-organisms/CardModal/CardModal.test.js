import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import {CardModal} from './CardModal';

describe('CardModal', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <CardModal
        location='myLocation'
      />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
