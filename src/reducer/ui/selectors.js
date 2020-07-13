import NameSpace from "../name-space.js";


const NAME_SPACE = NameSpace.UI;

export const getActiveOfferId = (state) => {
  return state[NAME_SPACE].activeOfferId;
};

export const getActiveOffer = (state) => {
  return state[NAME_SPACE].activeOffer;
};

export const getShowSortMenu = (state) => {
  return state[NAME_SPACE].showSortMenu;
};
