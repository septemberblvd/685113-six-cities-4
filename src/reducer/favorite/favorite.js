import {extend} from '../../utils';


const initialState = {
  favoriteOffers: [],
};

const ActionType = {
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
};

const ActionCreator = {
  loadFavoriteOffers: (offers) => {
    return {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };
  },
};

const Operation = {
  loadFavoriteOffers: (adaptCallback) => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadFavoriteOffers(data));
      });
  },
  changeFavoriteStatus: (adaptCallback, id, status) => (dispatch, getState, api) => {
    if (id) {
      return api.get(`/favorite/${id}/${status}`)
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadFavoriteOffers(data));
      });
    }
    return null;
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {favoriteOffers: action.payload});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
