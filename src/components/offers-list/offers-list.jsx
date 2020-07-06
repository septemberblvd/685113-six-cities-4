import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";
import {OfferType} from "../../const.js";


const OffersList = (props) => {

  const {offers, onHeaderClick, onCardMouseEnter, onCardMouseLeave} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((it) => <OfferCard
        key={it.id }
        offer={it}
        onCardMouseEnter={onCardMouseEnter}
        onCardMouseLeave={onCardMouseLeave}
        onHeaderClick={onHeaderClick}
      />)}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      OfferType.isRequired
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
};

export default OffersList;
