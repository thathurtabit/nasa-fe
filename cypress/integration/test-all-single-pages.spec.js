// import 'whatwg-fetch'; // required until cypress support fetch API
// import response from '../api-mock/response.json';
// import { api } from '../../src/utils/constants/constants';

// const items = response.collection.items.map(item => item.data.nasa_id);
// const localhost = '/asset/';

// describe('Single page tests', () => {
//   it('Should successfully load each single page', () => {
//     cy.server();
//     cy.route(`${api}/**`);

//     items.forEach(nasaID => {
//       cy.visit(`${localhost}${nasaID}`, {
//         onBeforeLoad: win => {
//           win.fetch = null;
//         },
//       });

//       cy.get(`article`)
//         .first()
//         .get('h1')
//         .should('be.visible')
//         .should('not.be.empty');

//       cy.get(`article`)
//         .get('img')
//         .should('be.visible')
//         .should('have.attr', 'alt')
//         .and('not.be.empty');

//       cy.get(`article`)
//         .get('[data-buy-button]')
//         .should('be.visible')
//         .should('not.be.empty');
//     });
//   });
// });
