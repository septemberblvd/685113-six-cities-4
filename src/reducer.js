import {getOffersInCity, extend} from './utils';
import offers from './mock/offers';

const initialState = {
  city: {
    cityName: `Amsterdam`,
    cityCoords: [52.38333, 4.9],
  },
  allOffers: offers,
  currentOffers: getOffersInCity(`Amsterdam`, offers),
};

const ActionType = {
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFERS: `CHANGE_CURRENT_OFFERS`
};

const ActionCreator = {
  changeLocation: (city) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: city,
  }),
  changeCurrentOffers: (cityName) => ({
    type: ActionType.CHANGE_CURRENT_OFFERS,
    payload: cityName,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_LOCATION:
      return extend(state, {city: action.payload});
    case ActionType.CHANGE_CURRENT_OFFERS:
      return extend(state, {
        currentOffers: getOffersInCity(action.payload, state.allOffers),
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
