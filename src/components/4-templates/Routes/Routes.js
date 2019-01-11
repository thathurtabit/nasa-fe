import React, { Component, Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import RoutesWrapper, { Content } from './Routes.styled';
import Loading from '../../1-atoms/Loading/Loading';
import ErrorBoundary from '../../2-molecules/ErrorBoundary/ErrorBoundary';

// Use React.lazy for lazyload / code splitting
const Home = lazy(() => import('../../5-pages/Home/Home'));
const Error = lazy(() => import('../../2-molecules/Error/Error'));
const ItemModal = lazy(() => import('../../3-organisms/ItemModal/ItemModal'));
const ItemSingle = lazy(() => import('../../5-pages/ItemSingle/ItemSingle'));

class Routes extends Component {
  constructor(props) {
    super(props);
    this.previousLocation = props.location;
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      prevProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location;
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <Fragment>
        <RoutesWrapper role="main">
          <ErrorBoundary>
            <Content>
              <Suspense fallback={<Loading />}>
                <Switch location={isModal ? this.previousLocation : location}>
                  <Route exact path="/" component={() => <Home />} />
                  <Route
                    path="/asset/:id"
                    component={() => (
                      <ItemSingle location={location.pathname} />
                    )}
                  />
                  <Route
                    component={() => <Error error="404: Page not found" />}
                  />
                </Switch>
              </Suspense>
            </Content>
            <Suspense fallback={<Loading />}>
              {isModal && (
                <Route
                  path="/asset/:id"
                  component={() => <ItemModal location={location} />}
                />
              )}
            </Suspense>
          </ErrorBoundary>
        </RoutesWrapper>
      </Fragment>
    );
  }
}

// export default connect(mapStateToProps)(Routes);
export default Routes;

Routes.propTypes = {
  location: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.object, PropTypes.string])
  ).isRequired,
};
