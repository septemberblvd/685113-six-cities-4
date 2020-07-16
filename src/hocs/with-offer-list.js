import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../reducer/ui/ui.js";
import {compose} from "redux";
import {Operation as DataOperation} from "../reducer/data/data.js";
import {adaptOffer} from "../adapter/offers.js";

const withOfferList = (Component) => {
  class WithOfferList extends PureComponent {
    constructor(props) {
      super(props);

    }

    render() {
      const {onCardMouseEnter, onCardMouseLeave, changeFavoriteStatus} = this.props;
      return <Component
        {...this.props}
        onCardMouseLeave={onCardMouseLeave}
        onCardMouseEnter={onCardMouseEnter}
        changeFavoriteStatus={changeFavoriteStatus}
      />;
    }
  }

  WithOfferList.propTypes = {
    onCardMouseEnter: PropTypes.func.isRequired,
    onCardMouseLeave: PropTypes.func.isRequired,
    changeFavoriteStatus: PropTypes.func.isRequired,
  };

  return WithOfferList;
};

const mapDispatchToProps = (dispatch) => ({
  onCardMouseEnter(offer) {
    dispatch(ActionCreator.setActiveOfferId(offer.id));
  },
  onCardMouseLeave() {
    dispatch(ActionCreator.setActiveOfferId(null));
  },
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(adaptOffer, id, status));
  },
});

const composedWithOfferList = compose(
    connect(null, mapDispatchToProps), withOfferList
);

export {withOfferList};

export default composedWithOfferList;
