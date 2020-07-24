const MAX_IMAGES = 6;
const MAX_COOMMENT_LENGTH = 10;

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
  SING_IN: `/login`,
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

export {SortType, cities, AppRoute, citiesList, MAX_IMAGES, MAX_COOMMENT_LENGTH};
