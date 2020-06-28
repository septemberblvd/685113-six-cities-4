const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersInCity = (cityName, offers) => {
  const offersInCity = offers
      .filter((offer) => offer.cityName === cityName);
  return offersInCity;
};

export {extend};
