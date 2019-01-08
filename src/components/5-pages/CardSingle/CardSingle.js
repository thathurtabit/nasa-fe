import React, { Component, Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardSingleStyled from './CardSingle.styled';
import Loading from '../../1-atoms/Loading/Loading';
import { NoTitle, NoDesc } from '../../../utils/constants/constants';

const NoItems = lazy(() => import('../../2-molecules/NoItems/NoItems'));
const Card = lazy(() => import('../../3-organisms/Card/Card'));

const mapStateToProps = state => ({
  api: state.api,
  products: state.response,
});

export class CardSingle extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, error: false };
  }

  componentDidMount() {
    this.mounted = true;
    this.handleFetchData = this.handleFetchData.bind(this);
    this.handleFetchError = this.handleFetchError.bind(this);

    const { api, products } = this.props;

    if (!products.length && this.mounted) {
      fetch(api, { credentials: 'same-origin', method: 'GET' })
        .then(response => response.json())
        .then(data => this.handleFetchData(data))
        .catch(error => this.handleFetchError(error));
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  handleFetchData(data) {
    const { location, products } = this.props;
    const productId = location
      .split('/')
      .filter(loc => loc)
      .pop();

    if (this.mounted && !products.length) {
      // Filter out single Card
      const productSingle =
        data.Products.filter(prod => prod.MoonpigProductNo === productId)[0] ||
        null;
      // Keep what we need
      const product = {
        title: productSingle.Title || NoTitle,
        desc: productSingle.ShortDescription || NoDesc,
        imgSrc: productSingle.ProductImage.Link.Href,
        id: productSingle.ProductId,
        productNo: productSingle.MoonpigProductNo,
        link: '/',
      };

      this.setState({ product, isLoading: false });
    }
  }

  handleFetchError(error) {
    this.setState({ error: true, isLoading: false });
    console.warn(error);
  }

  render() {
    const { isLoading, product, error } = this.state;

    return (
      <CardSingleStyled>
        {isLoading && <Loading isLoading />}
        <Suspense fallback={<Loading isLoading={isLoading} />}>
          {error ? (
            <NoItems text="No items found." />
          ) : (
            !isLoading && product !== null && <Card product={product} />
          )}
        </Suspense>
      </CardSingleStyled>
    );
  }
}

export default connect(mapStateToProps)(CardSingle);

CardSingle.propTypes = {
  location: PropTypes.string.isRequired,
  api: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.objectOf(
      PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object,
      ])
    )
  ),
};

CardSingle.defaultProps = {
  products: [],
};
