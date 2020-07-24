import * as React from 'react';
import {connect} from "react-redux";
import {ActionCreator} from "../reducer/ui/ui";
import {compose} from "redux";
import {Operation as DataOperation} from "../reducer/data/data";
import {adaptOffer} from "../adapter/offers";
import {getAuthorizationStatus} from '../reducer/user/selectors.js';
import {AuthorizationStatus} from '../reducer/user/user.js';
import history from '../history.js';
import {AppRoute} from '../const.js';

interface Props {
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
  changeFavoriteStatus: (id, status: number) => void;
  authorizationStatus: string;
}

const withOfferList = (Component) => {
  class WithOfferList extends React.PureComponent<Props, []> {
    constructor(props) {
      super(props);

      this._handleChangeFavoriteStatus = this._handleChangeFavoriteStatus.bind(this);
    }

    _handleChangeFavoriteStatus(id, status) {
      const {changeFavoriteStatus, authorizationStatus} = this.props;
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        changeFavoriteStatus(id, status);
      } else {
        history.push(AppRoute.SING_IN);
      }
    }

    render() {
      const {onCardMouseEnter, onCardMouseLeave} = this.props;
      return <Component
        {...this.props}
        onCardMouseLeave={onCardMouseLeave}
        onCardMouseEnter={onCardMouseEnter}
        changeFavoriteStatus={this._handleChangeFavoriteStatus}
      />;
    }
  }

  return WithOfferList;
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

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
    connect(mapStateToProps, mapDispatchToProps), withOfferList
);

export {withOfferList};

export default composedWithOfferList;
