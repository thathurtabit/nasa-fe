import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import IconAudio from './IconAudio';

const title = 'test title';

describe('IconAudio', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<IconAudio title={title} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
