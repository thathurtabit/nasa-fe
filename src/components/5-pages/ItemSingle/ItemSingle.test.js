import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import { ItemSingle } from './ItemSingle';

describe('ItemSingle', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(
      <ItemSingle
        location="url"
        fetchSearchData={() => null}
        fetchAssetData={() => null}
        fetchError={false}
        fetching
      />
    );
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
