import * as React from "react";
import * as renderer from "react-test-renderer";
import {Property} from "./property";
import * as configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import thunk from 'redux-thunk';
import {Operation} from '../../reducer/data/data';
import {Router} from "react-router-dom";
import history from '../../history.js';


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
  isItFavorite: true,
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
    isItFavorite: true,
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
        allOffers: offers,
        currentSortType: `Popular`,
        city: {
          cityName: `Paris`,
          cityCoords: [48.85341, 2.3488],
        },
        sendStatus: false,
        isError: false,
        currentComments: [
          {
            reviewId: 14,
            authorId: 21,
            reviewName: `Ozzy`,
            reviewAvatar: `src`,
            reviewGrade: 4,
            reviewText: `Id minim labore ut velit sit velit.Magna deserunt reprehenderit consequat elit cupidatat proident nostrud amet minim nulla.`,
            reviewTime: `Sun Jul 19 2020 11:48:22 GMT+0700 (Красноярск, стандартное время)`,
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
              <Router history={history}>
                <Property
                  authorizationStatus={`NO_AUTH`}
                  allOffers={offers}
                  offers={offers}
                  userEmail={`Foo@mail.ru`}
                  openedOfferId={`1`}
                  // offer={offer}
                  nearOffers={offers}
                  currentCity={currentCity}
                  onCardHeaderClick = {() => {}}
                  activeOfferId= {26}
                  // onLoadComments={() => {}}
                  onLoadNearOffers={() => {}}
                  changeFavoriteStatus={() => {}}
                />
              </Router>
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

