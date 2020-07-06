import React from "react";
import {OfferType} from "../../const";
import PropTypes from "prop-types";
import NearOffersItem from "../near-offers-item/near-offers-item.jsx";

const NearOffersList = (props) => {
  const {offers, onCardMouseEnter, onHeaderClick, onCardMouseLeave} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((it) => <NearOffersItem
          key={it.id}
          nearOffer={it}
          onCardMouseEnter={onCardMouseEnter}
          onCardMouseLeave={onCardMouseLeave}
          onHeaderClick={onHeaderClick}
        />)}
      </div>
    </section>
  );
};

NearOffersList.propTypes = {
  offers: PropTypes.arrayOf(
      OfferType.isRequired
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
};

export default NearOffersList;
