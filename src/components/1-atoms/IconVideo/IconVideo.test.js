import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import IconVideo from './IconVideo';

const title = 'test title';

describe('IconVideo', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<IconVideo title={title} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
