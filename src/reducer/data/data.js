import {getOffersInCity, extend, getSortedOffers, updateArrayWithNewElement} from '../../utils';
import {ActionCreator as ActionCreatorUI} from '../ui/ui.js';
import {SortType} from '../../const.js';

const initialState = {
  city: {
    cityName: `Amsterdam`,
    cityCoords: [52.38333, 4.9],
  },
  currentSortType: `Popular`,
  allOffers: [],
  currentOffers: [],
  currentComments: [],
  nearOffers: [],
  newComment: null,
  newRating: null,
  sendStatus: false,
  isError: false,
  favoriteOffers: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  LOAD_NEAR_OFFERS: `LOAD_NEAR_OFFERS`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  CHANGE_LOCATION: `CHANGE_LOCATION`,
  CHANGE_CURRENT_OFFERS: `CHANGE_CURRENT_OFFERS`,
  SORT_OFFERS: `SORT_OFFERS`,
  CHANGE_NEW_COMMENT: `CHANGE_NEW_COMMENT`,
  CHANGE_NEW_RATING: `CHANGE_NEW_RATING`,
  CHANGE_SEND_STATUS: `CHANGE_SEND_STATUS`,
  SET_ERROR: `SET_ERROR`,
  LOAD_FAVORITE_OFFERS: `LOAD_FAVORITE_OFFERS`,
  CHANGE_FAVORITE_STATUS: `CHANGE_FAVORITE_STATUS`,
  UPDATE_OFFERS: `UPDATE_OFFERS`,
};

const ActionCreator = {
  loadOffers: (offersAll) => {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offersAll,
    };
  },
  loadComments: (commentsAll) => {
    return {
      type: ActionType.LOAD_COMMENTS,
      payload: commentsAll,
    };
  },
  loadNearOffers: (nearOffers) => {
    return {
      type: ActionType.LOAD_NEAR_OFFERS,
      payload: nearOffers,
    };
  },
  changeLocation: (city) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: city,
  }),
  changeCurrentOffers: (cityName) => ({
    type: ActionType.CHANGE_CURRENT_OFFERS,
    payload: cityName,
  }),
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType,
  }),
  changeNewComment: (comment) => ({
    type: ActionType.CHANGE_NEW_COMMENT,
    payload: comment,
  }),
  changeNewRating: (rating) => ({
    type: ActionType.CHANGE_NEW_RATING,
    payload: rating,
  }),
  changeSendStatus: (stat) => ({
    type: ActionType.CHANGE_SEND_STATUS,
    payload: !stat,
  }),
  setError: (isError) => ({
    type: ActionType.SET_ERROR,
    payload: isError,
  }),
  loadFavoriteOffers: (offers) => {
    return {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: offers,
    };
  },
  updateOffers: (offer) => {
    return {
      type: ActionType.UPDATE_OFFERS,
      payload: offer,
    };
  },
};

const Operation = {
  loadOffers: (adaptCallback) => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadOffers(data));
      });
  },
  loadComments: (adaptCallback, id) => (dispatch, getState, api) => {
    if (id) {
      return api.get(`/comments/${id}`)
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadComments(data));
      });
    }
    return null;
  },
  loadNearOffers: (adaptCallback, id) => (dispatch, getState, api) => {
    if (id) {
      return api.get(`/hotels/${id}/nearby`)
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadNearOffers(data));
      });
    }
    return null;
  },
  uploadComment: (commentData, adaptCallback, id, status) => (dispatch, getState, api) => {
    if (id) {
      return api.post(`/comments/${id}`, {
        comment: commentData.comment,
        rating: commentData.rating,
      })
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadComments(data));
        dispatch(ActionCreator.changeSendStatus(status));
        dispatch(ActionCreator.setError(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.setError(true));
        throw err;
      });
    }
    return null;
  },
  loadFavoriteOffers: (adaptCallback) => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadFavoriteOffers(data));
      });
  },
  changeFavoriteStatus: (adaptCallback, id, status) => (dispatch, getState, api) => {
    if (id) {
      return api.post(`/favorite/${id}/${status}`)
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.updateOffers(data));
        dispatch(ActionCreatorUI.setActiveOffer(data));
      });
    }
    return null;
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {allOffers: action.payload,
        currentOffers: getOffersInCity(state.city.cityName, action.payload)}
      );
    case ActionType.LOAD_COMMENTS:
      return extend(state, {currentComments: action.payload});
    case ActionType.LOAD_NEAR_OFFERS:
      return extend(state, {nearOffers: action.payload});
    case ActionType.CHANGE_LOCATION:
      return extend(state, {city: action.payload});
    case ActionType.CHANGE_CURRENT_OFFERS:
      return extend(state, {
        currentOffers: getOffersInCity(action.payload, state.allOffers),
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        currentSortType: action.payload,
        allOffers: action.payload === SortType.POPULAR
          ? state.allOffers
          : getSortedOffers(state.allOffers, action.payload),
      });
    case ActionType.CHANGE_NEW_COMMENT:
      return extend(state, {
        newComment: action.payload,
      });
    case ActionType.CHANGE_NEW_RATING:
      return extend(state, {
        newRating: action.payload,
      });
    case ActionType.CHANGE_SEND_STATUS:
      return extend(state, {
        sendStatus: action.payload,
      });
    case ActionType.SET_ERROR:
      return extend(state, {
        isError: action.payload,
      });
    case ActionType.LOAD_FAVORITE_OFFERS:
      return extend(state, {favoriteOffers: action.payload});
    case ActionType.UPDATE_OFFERS:
      return extend(state, {currentOffers: updateArrayWithNewElement(state.currentOffers, action.payload),
        allOffers: updateArrayWithNewElement(state.allOffers, action.payload)});
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
