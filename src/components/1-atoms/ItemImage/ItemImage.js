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

    // Note: Must be a prettier way of doing this
    this.img = new Image();

    this.handleLoadImage = this.handleLoadImage.bind(this);
  }

  componentDidMount() {
    this.handleLoadImage();
  }

  componentDidUpdate(prevProps) {
    const { url } = this.props;
    // Only show images once load has complete
    if (prevProps.url !== url) {
      this.handleLoadImage();
    }
  }

  handleLoadImage() {
    const { url } = this.props;
    this.img.src = url;
    this.img.onload = () => this.setState({ isLoading: false });
  }

  render() {
    const { isLoading } = this.state;
    const { title, url, thumb, modal } = this.props;

    return (
      <Fragment>
        {isLoading && <LoadingSmall />}
        {!isLoading && (
          <CSSTransition
            in={!isLoading}
            classNames="image"
            appear
            timeout={loadDelay}
          >
            <IMG
              className="image"
              src={url}
              alt={title}
              modal={modal}
              thumb={thumb}
            />
          </CSSTransition>
        )}
      </Fragment>
    );
  }
}

ItemImage.propTypes = {
  thumb: PropTypes.bool,
  modal: PropTypes.bool,
  url: PropTypes.string.isRequired,
  title: PropTypes.string,
};

ItemImage.defaultProps = {
  thumb: false,
  modal: false,
  title: 'NASA Image',
};
