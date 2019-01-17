import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ItemModalStyled, { ItemModalBG, ModalTitle } from './ItemModal.styled';
import {
  ItemContent,
  ShortDescription,
  ItemLeft,
  ItemRight,
  ThumbLink,
  Figure,
  Credit,
} from '../Item/Item.styled';
import {
  loadDelay,
  NoDesc,
  NoTitle,
  FullImage,
  mediaType,
} from '../../../utils/constants/constants';
import CloseModal from '../../1-atoms/CloseModal/CloseModal';
import ItemImage from '../../1-atoms/ItemImage/ItemImage';
import Button from '../../1-atoms/Button/Button';
import IconVideo from '../../1-atoms/IconVideo/IconVideo';
import IconAudio from '../../1-atoms/IconAudio/IconAudio';
import { IconWrap } from '../../2-molecules/ItemThumb/ItemThumb.styled';
import { getItemID } from '../../../utils/helpers/getItemID';

const mapStateToProps = state => ({
  items: state.response,
});

export class ItemModal extends Component {
  constructor(props) {
    super(props);
    this.modalRef = React.createRef();
  }

  componentDidMount() {
    this.modalRef.current.focus();
  }

  render() {
    const { location, items } = this.props;
    const itemURLID = getItemID(location);
    const item = items.filter(i => i.itemID === itemURLID)[0];

    return (
      <ItemModalBG>
        <CSSTransition classNames="modal-in" appear in timeout={loadDelay}>
          <ItemModalStyled
            data-item-modal
            role="dialog"
            aria-labelledby="article-title"
            aria-modal="true"
            tabIndex="0"
            className="modal-in"
            ref={this.modalRef}
          >
            <CloseModal />
            <ItemContent>
              <ItemRight>
                <ModalTitle>{item.title || NoTitle}</ModalTitle>
                <ShortDescription
                  dangerouslySetInnerHTML={{ __html: item.desc || NoDesc }}
                />
                <Button title={FullImage} url={item.link} external />
              </ItemRight>
              <ItemLeft>
                <ThumbLink href={item.link}>
                  <Figure>
                    {item.type === mediaType.image && (
                      <ItemImage url={item.href} modal title={item.title} />
                    )}
                    {item.type === mediaType.video && (
                      <IconWrap
                        thumb
                        large
                        type={item.type}
                        itemID={item.itemID}
                      >
                        <IconVideo title={item.type} />
                      </IconWrap>
                    )}
                    {item.type === mediaType.audio && (
                      <IconWrap
                        thumb
                        large
                        type={item.type}
                        itemID={item.itemID}
                      >
                        <IconAudio title={item.type} />
                      </IconWrap>
                    )}
                    <Credit>{item.credit}</Credit>
                  </Figure>
                </ThumbLink>
              </ItemLeft>
            </ItemContent>
          </ItemModalStyled>
        </CSSTransition>
      </ItemModalBG>
    );
  }
}

export default connect(mapStateToProps)(ItemModal);

ItemModal.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  location: PropTypes.string.isRequired,
};
