import React from "react";
import MainScreen from "../main-screen/main-screen.jsx";
import PropTypes from "prop-types";

const onHeaderClick = () => {};

const App = (props) => {
  const {offersCount, offers} = props;

  return <MainScreen
    offersCount = {offersCount}
    offers = {offers}
    onHeaderClick = {onHeaderClick}/>;
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isItPremium: PropTypes.bool.isRequired,
      })
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default App;
