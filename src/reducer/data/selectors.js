import {createSelector} from "reselect";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].allOffers;
};

export const getCurrentSortType = (state) => {
  return state[NAME_SPACE].currentSortType;
};

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].city;
};

export const getCurrentCityName = (state) => {
  return state[NAME_SPACE].city.cityName;
};

export const getCurrentOffers = createSelector(
    getOffers,

    getCurrentCityName,

    (resultOne, resultTwo) => {
      return resultOne.filter((it) => it.cityName === resultTwo);
    }
);
