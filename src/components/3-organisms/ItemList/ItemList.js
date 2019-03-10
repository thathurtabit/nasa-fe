import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ItemThumb from '../../2-molecules/ItemThumb/ItemThumb';
import ItemListStyled from './ItemList.styled';
import { loadDelay } from '../../../utils/constants/constants';

const ItemList = ({ items }) => (
  <Fragment>
    <ItemListStyled id="item-list" className="items-in">
      <TransitionGroup component={null}>
        {items.map((item, index) => (
          <CSSTransition
            key={item.uuid}
            classNames="items-in"
            timeout={loadDelay}
          >
            <ItemThumb num={index} item={item} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ItemListStyled>
  </Fragment>
);

export default ItemList;

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
