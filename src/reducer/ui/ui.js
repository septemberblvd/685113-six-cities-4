import {extend, getSortedOffers} from '../../utils';
import {SortType} from '../../const.js';

const initialState = {
  currentSortType: `Popular`,
  activeOfferId: null,
  activeOffer: null,
  showSortMenu: false,
};

const ActionType = {
  SORT_OFFERS: `SORT_OFFERS`,
  SET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SHOW_SORT_MENU: `SHOW_SORT_MENU`,
};

const ActionCreator = {
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    payload: sortType,
  }),
  setActiveOfferId: (offerId) => ({
    type: ActionType.SET_ACTIVE_OFFER_ID,
    payload: offerId,
  }),
  setActiveOffer: (offer) => ({
    type: ActionType.SET_ACTIVE_OFFER,
    payload: offer,
  }),
  showSortMenu: (isShown) => ({
    type: ActionType.SHOW_SORT_MENU,
    payload: isShown,
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SORT_OFFERS:
      return extend(state, {
        currentSortType: action.payload,
        currentOffers: action.payload === SortType.POPULAR
          ? state.currentOffers
          : getSortedOffers(state.currentOffers, action.payload),
      });
    case ActionType.SET_ACTIVE_OFFER_ID:
      return extend(state, {
        activeOfferId: action.payload,
      });

    case ActionType.SET_ACTIVE_OFFER:
      return extend(state, {
        activeOffer: action.payload,
      });

    case ActionType.SHOW_SORT_MENU:
      return extend(state, {
        showSortMenu: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
