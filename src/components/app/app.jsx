import React, {PureComponent} from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from "../property/property.jsx";
import {OfferType} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/ui/ui.js";
import {getCurrentCity, getCurrentOffers, getCurrentComments} from "../../reducer/data/selectors.js";
import {getActiveOffer, getActiveOfferId} from "../../reducer/ui/selectors.js";
import {getAuthorizationStatus, getUserEmail} from "../../reducer/user/selectors.js";
import {Operation as UserOperation, AuthorizationStatus} from "../../reducer/user/user.js";
import SingIn from "../sing-in/sing-in.jsx";


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
      login,
      userEmail,
      returnToMain,
      offers,
      cities,
      currentCity,
      activeOfferId,
      activeOffer} = this.props;

    if (activeOffer) {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return <Property
          userEmail={userEmail}
          offer={activeOffer}
          offers={offers}
          currentCity={currentCity}
          onHeaderClick = {this._handleCardHeaderClick}
          activeOfferId = {activeOfferId}
        />;
      } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
        return <SingIn
          onReturnButtonClick={returnToMain}
          onSubmit={login}
        />;
      }

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

    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/dev-offer">
            <Property offer={offers[0]}/>
          </Route>
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
  offers: PropTypes.arrayOf(
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
};

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
  authorizationStatus: getAuthorizationStatus(state),
  currentCity: getCurrentCity(state),
  offers: getCurrentOffers(state),
  activeOfferId: getActiveOfferId(state),
  activeOffer: getActiveOffer(state),
  currentComments: getCurrentComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onCardHeaderClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  returnToMain() {
    dispatch(ActionCreator.setActiveOffer(null));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
