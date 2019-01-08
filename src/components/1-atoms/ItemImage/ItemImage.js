import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import IMG from './ItemImage.styled';
import LoadingSmall from '../LoadingSmall/LoadingSmall';
import { loadDelay } from '../../../utils/constants/constants';

export default class ItemImage extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    // Only show images once load has complete
    // Note: Must be a prettier way of doing this
    const img = new Image();
    const { url } = this.props;
    img.src = url;
    img.onload = () =>
      setTimeout(() => this.setState({ isLoading: false }), 100);
  }

  render() {
    const { isLoading } = this.state;
    const { title, url, thumb } = this.props;
    return (
      <Fragment>
        {isLoading && <LoadingSmall />}
        {!isLoading && (
          <CSSTransition
            in={!isLoading}
            classNames="thumb"
            appear
            timeout={loadDelay}
          >
            <IMG className="thumb" src={url} alt={title} thumb={thumb} />
          </CSSTransition>
        )}
      </Fragment>
    );
  }
}

ItemImage.propTypes = {
  thumb: PropTypes.bool,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ItemImage.defaultProps = {
  thumb: false,
  title: 'Item',
};
