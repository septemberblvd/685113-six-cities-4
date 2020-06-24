import React, {PureComponent} from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Property from "../property/property.jsx";

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
    const {offersCount, offers} = this.props;
    const offer = this.state;
    if (offer.activeOffer) {
      return <Property offer={offer.activeOffer}/>;
    }

    return <MainScreen
      offersCount = {offersCount}
      offers = {offers}
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
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isItPremium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        description: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        guests: PropTypes.number.isRequired,
        appliances: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        owner: PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isSuper: PropTypes.bool.isRequired,
        }).isRequired,
        coords: PropTypes.arrayOf(
            PropTypes.number.isRequired
        ).isRequired
      })
  ).isRequired,
};

export default App;
