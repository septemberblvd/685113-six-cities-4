import React, {PureComponent} from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from "../property/property.jsx";
import {OfferType} from "../../const.js";
import {connect} from "react-redux";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardHeaderClick = this._handleCardHeaderClick.bind(this);
    this.state = {
      activeOffer: null,
    };
  }

  _handleCardHeaderClick(offer) {
    this.setState({activeOffer: offer});
  }

  _renderApp() {
    const {
      offers,
      cities,
      currentCity} = this.props;

    const offer = this.state;

    if (offer.activeOffer) {
      return <Property offer={offer.activeOffer}
        offers={offers}
        onHeaderClick = {this._handleCardHeaderClick}
      />;
    }

    return <MainScreen
      offers = {offers}
      cities = {cities}
      currentCity={currentCity}
      onHeaderClick = {this._handleCardHeaderClick}
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
  })
};

const mapStateToProps = (state) => ({
  currentCity: state.city,
  offers: state.currentOffers,
});

export {App};

export default connect(mapStateToProps)(App);
