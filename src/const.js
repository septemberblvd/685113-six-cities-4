// import React from "react";
import PropTypes from "prop-types";

const OfferType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isItPremium: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired,
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
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewId: PropTypes.number.isRequired,
        reviewName: PropTypes.string.isRequired,
        reviewAvatar: PropTypes.string.isRequired,
        reviewGrade: PropTypes.number.isRequired,
        reviewText: PropTypes.string.isRequired,
        reviewTime: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  nearOffers: PropTypes.arrayOf(
      PropTypes.number.isRequired
  ).isRequired,
});

const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price low to high`,
  PRICE_HIGH_TO_LOW: `Price high to low`,
  TOP_RATED: `Top rated first`,
};

export {OfferType, SortType};
