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

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

export const getCurrentComments = (state) => {
  return state[NAME_SPACE].currentComments;
};

export const getCurrentCityName = (state) => {
  return state[NAME_SPACE].city.cityName;
};

export const getNewComment = (state) => {
  return state[NAME_SPACE].newComment;
};

export const getNewRating = (state) => {
  return state[NAME_SPACE].newRating;
};

export const getSendStatus = (state) => {
  return state[NAME_SPACE].sendStatus;
};

export const getErrorStatus = (state) => {
  return state[NAME_SPACE].isError;
};

export const getCurrentOffers = createSelector(
    getOffers,

    getCurrentCityName,

    (resultOne, resultTwo) => {
      return resultOne.filter((it) => it.cityName === resultTwo);
    }
);
