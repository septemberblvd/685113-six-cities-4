import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from "../reducer";
import {compose} from "redux";

const withOfferList = (Component) => {
  class WithOfferList extends PureComponent {
    constructor(props) {
      super(props);

    }


    render() {
      const {onCardMouseEnter, onCardMouseLeave} = this.props;
      return <Component
        {...this.props}
        onCardMouseLeave={onCardMouseLeave}
        onCardMouseEnter={onCardMouseEnter}
      />;
    }
  }

  WithOfferList.propTypes = {
    onCardMouseEnter: PropTypes.func.isRequired,
    onCardMouseLeave: PropTypes.func.isRequired,
  };

  return WithOfferList;
};

const mapDispatchToProps = (dispatch) => ({
  onCardMouseEnter(offer) {
    dispatch(ActionCreator.setActiveOfferId(offer.id));
  },
  onCardMouseLeave() {
    dispatch(ActionCreator.setActiveOfferId(null));
  }
});

const composedWithOfferList = compose(
    connect(null, mapDispatchToProps), withOfferList
);

export {withOfferList};

export default composedWithOfferList;
