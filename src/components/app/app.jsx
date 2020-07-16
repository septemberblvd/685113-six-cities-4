import React, {PureComponent} from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import PropTypes from "prop-types";
import {Switch, Route, Router} from "react-router-dom";
import Property from "../property/property.jsx";
import {OfferType, AppRoute} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/ui/ui.js";
import {getCurrentCity, getCurrentOffers, getCurrentComments, getNearOffers, getFavoriteOffers} from "../../reducer/data/selectors.js";
import {getActiveOffer, getActiveOfferId} from "../../reducer/ui/selectors.js";
import {getAuthorizationStatus, getUserEmail} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {adaptOffersAll, adaptOffer} from "../../adapter/offers.js";
import SingIn from "../sing-in/sing-in.jsx";
import history from "../../history.js";
import {Favorites} from "../favorites/favorites.jsx";
import PrivateRoute from "../private-route/private-route.jsx";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardHeaderClick = this._handleCardHeaderClick.bind(this);
  }

  _handleCardHeaderClick(offer) {
    const {onCardHeaderClick} = this.props;

    onCardHeaderClick(offer);
  }

  _renderApp() {

    const {
      authorizationStatus,
      nearOffers,
      onLoadNearOffers,
      changeFavoriteStatus,
      userEmail,
      offers,
      cities,
      currentCity,
      activeOfferId,
      activeOffer} = this.props;

    if (activeOffer) {
      return <Property
        nearOffers={nearOffers}
        onLoadNearOffers={onLoadNearOffers}
        authorizationStatus={authorizationStatus}
        userEmail={userEmail}
        offer={activeOffer}
        offers={offers}
        currentCity={currentCity}
        onHeaderClick = {this._handleCardHeaderClick}
        activeOfferId = {activeOfferId}
        changeFavoriteStatus = {changeFavoriteStatus}
      />;
    }

    return <MainScreen
      userEmail={userEmail}
      offers = {offers}
      cities = {cities}
      currentCity={currentCity}
      onHeaderClick = {this._handleCardHeaderClick}
      activeOfferId = {activeOfferId}
    />;
  }

  render() {

    const {
      authorizationStatus,
      login,
      returnToMain,
    } = this.props;

    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderApp()}
          </Route>
          {/* <Route exact path="/dev-offer">
            <Property offer={offers[0]}/>
          </Route> */}
          <Route exact path={AppRoute.SING_IN}>
            <SingIn
              onReturnButtonClick={returnToMain}
              onSubmit={login} />
          </Route>
          <PrivateRoute
            exact
            authorizationStatus={authorizationStatus}
            path={AppRoute.FAVORITE}

            render={() => {
              return (
                <Favorites />
              );
            }}
          />
        </Switch>
      </Router>
    );

  }
}

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  userEmail: PropTypes.string,
  returnToMain: PropTypes.func.isRequired,
  onLoadNearOffers: PropTypes.func,
  nearOffers: PropTypes.arrayOf(
      OfferType
  ).isRequired,
  offers: PropTypes.arrayOf(
      OfferType
  ).isRequired,
  favoriteOffers: PropTypes.arrayOf(
      OfferType
  ).isRequired,
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        cityName: PropTypes.string.isRequired,
        cityCoords: PropTypes.array.isRequired,
      })
  ).isRequired,
  currentCity: PropTypes.shape({
    cityName: PropTypes.string.isRequired,
    cityCoords: PropTypes.array.isRequired,
  }),
  activeOfferId: PropTypes.number,
  onCardHeaderClick: PropTypes.func.isRequired,
  activeOffer: OfferType,
  onLoadFavoriteOffers: PropTypes.func.isRequired,
  changeFavoriteStatus: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
  nearOffers: getNearOffers(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentCity: getCurrentCity(state),
  offers: getCurrentOffers(state),
  activeOfferId: getActiveOfferId(state),
  activeOffer: getActiveOffer(state),
  currentComments: getCurrentComments(state),
  favoriteOffers: getFavoriteOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onLoadNearOffers(id) {
    dispatch(DataOperation.loadNearOffers(adaptOffersAll, id));
  },
  onLoadFavoriteOffers() {
    dispatch(DataOperation.loadFavoriteOffers(adaptOffersAll));
  },
  onCardHeaderClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  returnToMain() {
    dispatch(ActionCreator.setActiveOffer(null));
  },
  changeFavoriteStatus(id, status) {
    dispatch(DataOperation.changeFavoriteStatus(adaptOffer, id, status));
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
