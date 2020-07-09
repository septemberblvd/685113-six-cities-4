import {createSelector} from "reselect";
import NameSpace from "../name-space.js";


export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCurrentCity = (state) => {
  return state[NameSpace.DATA].currentCity;
};

export const getCurrentCityName = (state) => {
  return state[NameSpace.DATA].currentCity.cityName;
};

export const getCurrentOffers = createSelector(
    getOffers,

    getCurrentCityName,

    (resultOne, resultTwo) => {
      return resultOne.filter((it) => it.cityName === resultTwo);
    }
);
