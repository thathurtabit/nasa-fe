import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import ItemThumb from './ItemThumb';

describe('ItemThumb', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <ItemThumb
        item={{ Title: 'Item Title' }}
        toggleModal={() => null}
        modalOpen
      />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
