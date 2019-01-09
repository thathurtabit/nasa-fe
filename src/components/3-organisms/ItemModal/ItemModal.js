import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import ItemModalStyled, { ItemModalBG } from './ItemModal.styled';
import {
  ItemContent,
  ShortDescription,
  ItemLeft,
  ItemRight,
} from '../Item/Item.styled';
import {
  loadDelay,
  NoDesc,
  NoTitle,
  FullImage,
} from '../../../utils/constants/constants';
import CloseModal from '../../1-atoms/CloseModal/CloseModal';
import LoadingSmall from '../../1-atoms/LoadingSmall/LoadingSmall';
import PageTitle from '../../1-atoms/PageTitle/PageTitle';
import ItemImage from '../../1-atoms/ItemImage/ItemImage';
import Button from '../../1-atoms/Button/Button';

const mapStateToProps = state => ({
  items: state.response,
});

export class ItemModal extends Component {
  constructor(props) {
    super(props);

    this.modalRef = React.createRef();

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { location, items } = this.props;
    const itemURLID = location.pathname
      .split('/')
      .filter(loc => loc)
      .pop();
    const itemData = items.filter(item => item.itemID === itemURLID)[0];

    this.setState({ item: itemData, isLoading: false });

    this.modalRef.current.focus();
  }

  render() {
    const { item, isLoading } = this.state;

    return (
      <ItemModalBG>
        <CSSTransition classNames="modal-in" appear in timeout={loadDelay}>
          <ItemModalStyled
            data-item-modal
            role="dialog"
            aria-labelledby="modal-title"
            aria-modal="true"
            tabIndex="0"
            className="modal-in"
            ref={this.modalRef}
          >
            <CloseModal />
            {isLoading ? (
              <LoadingSmall isLoading />
            ) : (
              <ItemContent>
                <ItemRight>
                  <PageTitle title={item.title || NoTitle} />
                  <ShortDescription>{item.desc || NoDesc}</ShortDescription>
                  <Button title={FullImage} url={item.link} external />
                </ItemRight>
                <ItemLeft>
                  <ItemImage url={item.imgSrc} title={item.title} />
                </ItemLeft>
              </ItemContent>
            )}
          </ItemModalStyled>
        </CSSTransition>
      </ItemModalBG>
    );
  }
}

export default connect(mapStateToProps)(ItemModal);

ItemModal.defaultProps = {
  location: null,
};
