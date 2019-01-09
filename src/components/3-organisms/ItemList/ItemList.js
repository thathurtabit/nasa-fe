import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import uuidv1 from 'uuid/v1';
import { CSSTransition } from 'react-transition-group';
import ItemThumb from '../../2-molecules/ItemThumb/ItemThumb';
import ItemListStyled from './ItemList.styled';
import { loadDelay } from '../../../utils/constants/constants';

const ItemList = ({ items }) => (
  <Fragment>
    <CSSTransition classNames="items-in" appear timeout={loadDelay}>
      <ItemListStyled id="item-list" className="items-in">
        {items.map((item, index) => (
          <ItemThumb num={index} key={uuidv1()} item={item} />
        ))}
      </ItemListStyled>
    </CSSTransition>
  </Fragment>
);

export default ItemList;

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
