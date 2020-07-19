
import React from "react";
import renderer from "react-test-renderer";
import Favorites from "./favorites.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import {Operation} from '../../reducer/data/data';
import thunk from 'redux-thunk';
import {BrowserRouter} from "react-router-dom";
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
    reviews: [
      {
        reviewId: 14,
        reviewName: `Ozzy`,
        reviewAvatar: `src`,
        reviewGrade: 4,
        reviewText: `Id minim labore ut velit sit velit.Magna deserunt reprehenderit consequat elit cupidatat proident nostrud amet minim nulla.`,
        reviewTime: `May 8, 2016`,
      },
      {
        reviewId: 22,
        reviewName: `Mick`,
        reviewAvatar: `src`,
        reviewGrade: 2,
        reviewText: `Incididunt fugiat non aliqua eu nisi.Id Lorem cillum non voluptate nulla id fugiat Lorem exercitation irure ullamco enim veniam ullamco.`,
        reviewTime: `June 5, 2018`,
      },
    ],
    nearOffers: [1]
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
    const tree = renderer
        .create(
            <Provider store={store}>
              <BrowserRouter>
                <Favorites
                  authorizationStatus={`AUTH`}
                  onLoadFavoriteOffers={() => {}}
                  changeFavoriteStatus={() => {}}
                  onCardHeaderClick={() => {}}
                />
              </BrowserRouter>
            </Provider>, {createNodeMock: () => {
              return document.createElement(`div`);
            }})
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
