import { getItemID } from './getItemID';

const url1 = '/asset/PIA13517';
const url2 = '/asset/NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon';
const url3 = 'www.mytest.com/asset/PIA00126/';

describe('Testing getItemID', () => {
  it('Should return only the ID from a location path', () => {
    expect(getItemID(url1)).toBe('PIA13517');
  });
  it('Should return only the ID from a location path', () => {
    expect(getItemID(url2)).toBe(
      'NHQ_2018_0126_Jan. 31, 2018 Super Blue Blood Moon'
    );
  });
  it('Should return only the ID from a location path', () => {
    expect(getItemID(url3)).toBe('PIA00126');
  });
});
