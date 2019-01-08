import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import ItemImage from './ItemImage';

const title = 'test title';
const url = 'https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg';

describe('ItemImage', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<ItemImage url={url} title={title} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
