import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import thunk from 'redux-thunk';
import {Operation} from '../../reducer/data/data';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
jest.mock(`../../reducer/data/data`);
Operation.loadComments = () => (dispatch) => dispatch(jest.fn());

const offer = {
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
};

const offers = [
  {
    title: `Wood and stone place`,
    img: `src`,
    price: 100,
    rating: 5,
    type: `Apartment`,
    isItPremium: false,
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
    coords: [52.2345235432432, 4.2342342343242],
  },
];

const currentCity = {
  cityName: `Paris`,
  cityCoords: [48.85341, 2.3488],
};

describe(`Property`, () => {
  it(`Should Property render correctly`, () => {
    const store = mockStore({
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
      },
      [NameSpace.DATA]: {
        currentSortType: `Popular`,
        city: {
          cityName: `Paris`,
          cityCoords: [48.85341, 2.3488],
        },
        currentComments: [
          {
            reviewId: 14,
            authorId: 21,
            reviewName: `Ozzy`,
            reviewAvatar: `src`,
            reviewGrade: 4,
            reviewText: `Id minim labore ut velit sit velit.Magna deserunt reprehenderit consequat elit cupidatat proident nostrud amet minim nulla.`,
            reviewTime: `May 8, 2016`,
            isPro: false,
          },
        ],
      },
      [NameSpace.UI]: {
        showSortMenu: false,
      }
    });
    const tree = renderer
        .create(
            <Provider store={store}>
              <Property
                offer={offer}
                nearOffers={offers}
                currentCity={currentCity}
                onHeaderClick = {() => {}}
                activeOfferId= {26}
                onLoadComments={() => {}}
                onLoadNearOffers={() => {}}
              />
            </Provider>
            , {
              createNodeMock: () => {
                return document.createElement(`div`);
              }
            }
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

