import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import IMG from './CardImage.styled';
import LoadingSmall from '../LoadingSmall/LoadingSmall';
import { loadDelay } from '../../../utils/constants/constants';

export default class CardImage extends Component {
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
    img.onload = () => this.setState({ isLoading: false });
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

CardImage.propTypes = {
  thumb: PropTypes.bool,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

CardImage.defaultProps = {
  thumb: false,
  title: 'Card',
};
