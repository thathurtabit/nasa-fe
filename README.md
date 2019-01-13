# Sainsbury's FE task (NASA)

Demo can be viewed here: [https://nasa-media.org/](https://nasa-media.org/)

## Notes

- Uses IntersectionObserver as well as React's lazy/Suspense methods to lazy load content based on the user's interactions / viewport
- Uses Redux Thunk to handle api calls and return data
- Images/assets can be viewed either in a Modal format, or directly via the asset/ID url (opens single page) for direct access to specific media

## Snags

- Generally due to the potential scale of the task, there's plenty of areas for improvment (code cleanliness, more robust testing, design, etc.)
- Given more time, providing more suitable image variations (sizes) over screen sizes would improve performance / experience
- Cypress.io was added for end-to-end testing, but as it doesn't currently support Fetch (and workarounds aren't great) I can't cover as much as I would like
- ReactTransitionGroup seems to want to transition everything all of the time (a little annoying)
- Given more time, pagination would be good to use at some point (while still lazy loading)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](https://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>

### `yarn run e2e`

Launches a command line version of Cypress end-to-end testing.<br>
(Note: Make sure you've run `yarn start` first.)<br>

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Uses

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reacttraining.com/react-router/web/guides/quick-start)
- [StyledComponents](https://www.styled-components.com/)
- [React Transition Group](https://reactcommunity.org/react-transition-group/)
- [Jest](https://jestjs.io/en/)
- [Enzyme](https://airbnb.io/enzyme/)
- [Cypress](https://www.cypress.io/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
