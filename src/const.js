import PropTypes from "prop-types";

const MAX_IMAGES = 6;
const MAX_COOMMENT_LENGTH = 10;

const Offer = PropTypes.shape({
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  isItPremium: PropTypes.bool.isRequired,
  isItFavorite: PropTypes.bool.isRequired,
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
});

const OfferType = PropTypes.oneOfType([Offer, () => null]);

const CommentType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.shape(
    {
      reviewId: PropTypes.number.isRequired,
      authorId: PropTypes.number.isRequired,
      reviewName: PropTypes.string.isRequired,
      reviewAvatar: PropTypes.string.isRequired,
      reviewGrade: PropTypes.number.isRequired,
      reviewText: PropTypes.string.isRequired,
      reviewTime: PropTypes.string.isRequired,
      isPro: PropTypes.bool.isRequired,
    }
)), () => null]);

const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price low to high`,
  PRICE_HIGH_TO_LOW: `Price high to low`,
  TOP_RATED: `Top rated first`,
};

const cities = [
  {
    cityName: `Paris`,
    cityCoords: [48.85341, 2.3488],
  },
  {
    cityName: `Cologne`,
    cityCoords: [50.9381, 6.95],
  },
  {
    cityName: `Brussels`,
    cityCoords: [50.8504, 4.34878],
  },
  {
    cityName: `Amsterdam`,
    cityCoords: [52.38333, 4.9],
  },
  {
    cityName: `Hamburg`,
    cityCoords: [53.5753, 10.0153],
  },
  {
    cityName: `Dusseldorf`,
    cityCoords: [51.2217, 6.77616],
  },
];

const AppRoute = {
  SING_IN: `/sing-in`,
  OFFER: `/offer/:id`,
  FAVORITE: `/favorite`,
  ROOT: `/`,
};

const citiesList = [
  `Amsterdam`,
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Hamburg`,
  `Dusseldorf`,
];

export {OfferType, SortType, cities, CommentType, AppRoute, citiesList, MAX_IMAGES, MAX_COOMMENT_LENGTH};
