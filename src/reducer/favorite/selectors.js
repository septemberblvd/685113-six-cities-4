import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.FAVORITE;

export const getFavoriteOffers = (state) => {
  return state[NAME_SPACE].favoriteOffers;
};
