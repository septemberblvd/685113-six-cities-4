import Favorites from "../favorites/favorites.jsx";
import history from "../../history.js";
import MainScreen from "../main-screen/main-screen.jsx";
import Property from "../property/property.jsx";
import PropTypes from "prop-types";
import React, {PureComponent} from "react";
import SingIn from "../sing-in/sing-in.jsx";
import {ActionCreator} from "../../reducer/ui/ui.js";
import {adaptOffersAll, adaptOffer} from "../../adapter/offers.js";
import {connect} from "react-redux";
import {getActiveOffer, getActiveOfferId} from "../../reducer/ui/selectors.js";
import {getAuthorizationStatus, getUserEmail} from "../../reducer/user/selectors.js";
import {getCurrentCity, getCurrentOffers, getCurrentComments, getNearOffers, getFavoriteOffers, getOffers} from "../../reducer/data/selectors.js";
import {OfferType, AppRoute} from "../../const.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import PrivateRoute from "../private-route/private-route.jsx";
import {Switch, Route, BrowserRouter} from "react-router-dom";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardHeaderClick = this._handleCardHeaderClick.bind(this);
  }

  _handleCardHeaderClick(offer) {
    const {onCardHeaderClick} = this.props;

    onCardHeaderClick(offer);
  }


  render() {

    const {
      authorizationStatus,
      login,
      returnToMain,
      favoriteOffers,
      userEmail,
      offers,
      cities,
      currentCity,
      activeOfferId,
    } = this.props;

    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            <MainScreen
              userEmail={userEmail}
              offers = {offers}
              cities = {cities}
              currentCity={currentCity}
              onHeaderClick = {this._handleCardHeaderClick}
              activeOfferId = {activeOfferId}
            />;
          </Route>
          <Route exact path={AppRoute.SING_IN}>
            <SingIn
              onReturnButtonClick={returnToMain}
              onSubmit={login} />
          </Route>
          <Route path={`/offer/:id`} render={(props) => {
            return (
              <Property
                openedOfferId={props.match.params.id}
              />);
          }}>

          </Route>
          <PrivateRoute
            exact
            authorizationStatus={authorizationStatus}
            path={AppRoute.FAVORITE}

            render={() => {
              return (
                <Favorites
                  favoriteOffers={favoriteOffers}
                  onHeaderClick = {this._handleCardHeaderClick} />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
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
  allOffers: PropTypes.arrayOf(
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
  allOffers: getOffers(state),
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
