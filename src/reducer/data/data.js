import {getOffersInCity, extend, getSortedOffers} from '../../utils';
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
  uploadComment: (commentData, adaptCallback, id, form) => (dispatch, getState, api) => {
    if (id) {
      return api.post(`/comments/${id}`, {
        comment: commentData.comment,
        rating: commentData.rating,
      })
      .then((response) => {
        const data = adaptCallback ? adaptCallback(response.data) : response.data;
        dispatch(ActionCreator.loadComments(data));
        form.reset();
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
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
