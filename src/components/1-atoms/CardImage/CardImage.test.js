import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import 'jest-styled-components';
import { delay } from 'bluebird';
import { shallowWithTheme } from '../../../utils/test_config/testHelpers';

import CardImage from './CardImage';

const title = 'test title';
const url =
  'https://d1xkhapf8f3lxw.cloudfront.net/api/images/CardShop/57/product/tw902';

describe('CardImage', () => {
  it('should render correctly', () => {
    const element = shallowWithTheme(<CardImage url={url} title={title} />);
    expect(shallowToJson(element)).toMatchSnapshot();
  });
});
