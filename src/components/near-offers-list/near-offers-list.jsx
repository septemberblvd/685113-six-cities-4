import React from "react";
import {OfferType} from "../../const";
import PropTypes from "prop-types";
import NearOffersItem from "../near-offers-item/near-offers-item.jsx";

const NearOffersList = (props) => {
  const {offers, onCardMouseEnter, onHeaderClick} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((it, i) => <NearOffersItem
          key={it.id + i}
          nearOffer={it}
          onCardMouseEnter={onCardMouseEnter}
          onHeaderClick={onHeaderClick}
        />)}
      </div>
    </section>
  );
};

NearOffersList.propTypes = {
  offers: PropTypes.arrayOf(
      OfferType
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
};

export default NearOffersList;