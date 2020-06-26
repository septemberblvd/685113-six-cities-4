import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {OfferType} from "../../const.js";


const OffersList = (props) => {

  const {offers, onHeaderClick, onCardMouseEnter} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((it, i) => <OfferCard
        key={it.id + i}
        offer={it}
        onCardMouseEnter={onCardMouseEnter}
        onHeaderClick={onHeaderClick}
      />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      OfferType
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
};

export default OffersList;
