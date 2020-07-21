
import configureStore from "redux-mock-store";
import Favorites from "./favorites.jsx";
import NameSpace from "../../reducer/name-space.js";
import React from "react";
import renderer from "react-test-renderer";
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

const offers = [
  {
    title: `Wood and stone place`,
    img: `src`,
    price: 80,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
    cityName: `Paris`,
    images: [
      `src`,
      `src`,
      `src`,
      `src`,
      `src`,
      `src`,
    ],
    description: `Some text`,
    bedrooms: 2,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `src`,
      name: `Death`,
      isSuper: true,
    },
    coords: [52.39874984984841, 4.82456445558843],
  },
];

describe(`Favorites`, () => {
  it(`Should Favorites render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        favoriteOffers: offers,
      },
      [NameSpace.USER]: {
        authorizationStatus: `AUTH`,
        userEmail: ``,
      }
    });

    const onLoadFavoriteOffers = jest.fn();
    const changeFavoriteStatus = jest.fn();
    const onCardHeaderClick = jest.fn();

    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <Favorites
                  authorizationStatus={`AUTH`}
                  onLoadFavoriteOffers={onLoadFavoriteOffers}
                  changeFavoriteStatus={changeFavoriteStatus}
                  onCardHeaderClick={onCardHeaderClick}
                />
              </Router>
            </Provider>, {createNodeMock: () => {
              return document.createElement(`div`);
            }})
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
