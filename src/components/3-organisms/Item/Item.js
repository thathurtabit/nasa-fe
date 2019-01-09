import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ItemStyled, {
  ItemContent,
  ShortDescription,
  ItemLeft,
  ItemRight,
} from './Item.styled';
import { loadDelay, FullImage } from '../../../utils/constants/constants';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import ItemImage from '../../1-atoms/ItemImage/ItemImage';
import Button from '../../1-atoms/Button/Button';
import Return from '../../1-atoms/Return/Return';

const Item = ({ item }) => (
  <CSSTransition classNames="item" appear timeout={loadDelay}>
    <ItemStyled className="item">
      <ItemContent>
        <ItemRight>
          <PageTitle title={item.title} />
          <ShortDescription>{item.desc}</ShortDescription>
          <Button tabIndex="0" title={FullImage} url={item.link} external />
        </ItemRight>
        <ItemLeft>
          <ItemImage url={item.imgSrc} title={item.title} />
        </ItemLeft>
      </ItemContent>
      <Return text="More Items" />
    </ItemStyled>
  </CSSTransition>
);

export default Item;

Item.propTypes = {
  item: PropTypes.objectOf(PropTypes.string).isRequired,
};
