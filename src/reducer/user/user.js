import {extend} from '../../utils';
import history from '../../history';
import {AppRoute} from '../../const';

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  userEmail: null,
  isLoading: true,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_EMAIL: `GET_EMAIL`,
  CHECK_LOADING: `CHECK_LOADING`
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  getEmail: (email) => {
    return {
      type: ActionType.GET_EMAIL,
      payload: email,
    };
  },
  checkLoading: (status) => {
    return {
      type: ActionType.CHECK_LOADING,
      payload: status,
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((loginData) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getEmail(loginData.data.email));
        dispatch(ActionCreator.checkLoading(false));
      })
      .catch((err) => {
        dispatch(ActionCreator.checkLoading(true));
        history.push(AppRoute.SING_IN);
        throw err;
      });
  },
  login: (authData) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then(() => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getEmail(authData.login));
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_EMAIL:
      return extend(state, {
        userEmail: action.payload,
      });
    case ActionType.CHECK_LOADING:
      return extend(state, {
        isLoading: action.payload
      });
  }

  return state;
};


export {ActionCreator, Operation, AuthorizationStatus, ActionType, reducer};
