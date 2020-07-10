import {extend} from '../../utils';


const initialState = {
  activeOfferId: null,
  activeOffer: null,
  showSortMenu: false,
};

const ActionType = {
  SET_ACTIVE_OFFER_ID: `SET_ACTIVE_OFFER_ID`,
  SET_ACTIVE_OFFER: `SET_ACTIVE_OFFER`,
  SHOW_SORT_MENU: `SHOW_SORT_MENU`,
};

const ActionCreator = {
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
