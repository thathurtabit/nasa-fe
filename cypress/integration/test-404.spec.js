import { ErrorTitle, NoAssetTitle } from '../../src/utils/constants/constants';

describe('Error Page Tests', () => {
  it('Test 404 appears when invalid route added', () => {
    cy.visit('/borked-url-404');

    cy.get(`h1`)
      .should('be.visible')
      .contains(ErrorTitle);
  });

  it('Test 404 appears when invalid asset requested', () => {
    cy.visit('/asset/no-asset-vdfvdddfvd55');
    cy.wait(2000);
    cy.get(`h1`)
      .should('be.visible')
      .contains(NoAssetTitle);
  });
});
