import React, {PureComponent} from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from "../property/property.jsx";
import {OfferType, CommentType} from "../../const.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/ui/ui.js";
import {getCurrentCity, getCurrentOffers, getCurrentComments} from "../../reducer/data/selectors.js";
import {getActiveOffer, getActiveOfferId} from "../../reducer/ui/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {adaptComments} from "../../adapter/comments.js";


class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardHeaderClick = this._handleCardHeaderClick.bind(this);
    this._getComments = this._getComments.bind(this);
  }

  _handleCardHeaderClick(offer) {
    const {onCardHeaderClick} = this.props;

    onCardHeaderClick(offer);
  }

  _getComments() {
    const {loadComments, activeOffer} = this.props;

    loadComments(activeOffer.id);
  }

  _renderApp() {

    const {
      offers,
      cities,
      currentCity,
      activeOfferId,
      activeOffer,
      currentComments} = this.props;

    if (activeOffer) {
      this._getComments();
      return <Property offer={activeOffer}
        comments={currentComments}
        offers={offers}
        currentCity={currentCity}
        onHeaderClick = {this._handleCardHeaderClick}
        activeOfferId = {activeOfferId}
      />;
    }

    return <MainScreen
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
  loadComments: PropTypes.func.isRequired,
  currentComments: CommentType,
};

const mapStateToProps = (state) => ({
  currentCity: getCurrentCity(state),
  offers: getCurrentOffers(state),
  activeOfferId: getActiveOfferId(state),
  activeOffer: getActiveOffer(state),
  currentComments: getCurrentComments(state)
});

const mapDispatchToProps = (dispatch) => ({
  onCardHeaderClick(offer) {
    dispatch(ActionCreator.setActiveOffer(offer));
  },
  loadComments(id) {
    dispatch(DataOperation.loadComments(adaptComments, id));
  }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
