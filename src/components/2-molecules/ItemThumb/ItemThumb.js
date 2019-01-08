import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import 'intersection-observer';
import { InView } from 'react-intersection-observer';
import ItemThumbStyled, { ItemLink } from './ItemThumb.styled';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';
import { toggleModal } from '../../../state/actions/toggleModal';

const LazyThumb = lazy(() => import('../../1-atoms/ItemImage/ItemImage'));

const mapStateToProps = state => ({
  modalOpen: state.modalOpen,
});

const mapDispatchToProps = dispatch => ({
  toggleModal: bool => dispatch(toggleModal(bool)),
});

const ItemThumb = ({ item, modalOpen, toggleModal, num }) => {
  const { title, imgSrc, itemID } = item;
  const body = document.querySelector('body');

  // Breaking out of React
  if (modalOpen) {
    body.setAttribute('style', 'overflow-y: hidden;');
  } else {
    body.setAttribute('style', 'overflow-y: scroll;');
  }

  return (
    <InView>
      {({ inView, ref }) => (
        <ItemThumbStyled ref={ref}>
          {inView && (
            <Suspense fallback={<LoadingSmall />}>
              <ItemLink
                id={`item-thumb-${num}`}
                key={itemID}
                to={{
                  pathname: `/asset/${itemID}`,
                  state: { modal: true },
                }}
                tabIndex="0"
                title={title}
                onClick={() => toggleModal(true)}
              >
                <LazyThumb url={imgSrc} title={title} thumb />
              </ItemLink>
            </Suspense>
          )}
        </ItemThumbStyled>
      )}
    </InView>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemThumb);

ItemThumb.propTypes = {
  modalOpen: PropTypes.bool,
  toggleModal: PropTypes.func.isRequired,
  item: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

ItemThumb.defaultProps = {
  modalOpen: false,
};
