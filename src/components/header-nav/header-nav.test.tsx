import configureStore from "redux-mock-store";
import HeaderNav from "./header-nav";
import NameSpace from "../../reducer/name-space";
import * as React from "react";
import * as renderer from "react-test-renderer";
import thunk from 'redux-thunk';
import {Router} from "react-router-dom";
import {Operation} from '../../reducer/data/data';
import {Provider} from "react-redux";
import history from '../../history.js';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

jest.mock(`../../reducer/data/data`);
Operation.loadFavoriteOffers = () => (dispatch) => dispatch(jest.fn());
Operation.changeFavoriteStatus = () => (dispatch) => dispatch(jest.fn());

describe(`HeaderNav`, () => {
  it(`Should HeaderNav render correctly`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        userEmail: ``,
      }
    });

    const checkAuth = jest.fn();

    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history} >
                <HeaderNav
                  checkAuth={checkAuth}
                />
              </Router>
            </Provider>, {createNodeMock: () => {
              return document.createElement(`div`);
            }})
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
