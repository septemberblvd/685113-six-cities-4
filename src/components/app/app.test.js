import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

const offers = [
  {
    title: `Wood and stone place`,
    img: `src`,
    price: 80,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    isItFavorite: false,
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

const cities = [
  {
    cityName: `Paris`,
    cityCoords: [48.85341, 2.3488],
  },
];

const currentCity = {
  cityName: `Paris`,
  cityCoords: [48.85341, 2.3488],
};

describe(`App`, () => {
  it(`Render App`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        currentSortType: `Popular`,
        city: {
          cityName: `Paris`,
          cityCoords: [48.85341, 2.3488],
        },
      },
      [NameSpace.UI]: {
        showSortMenu: false,
      }
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <App
            isOpened={true}
            authorizationStatus={`NO_AUTH`}
            currentSortType={`Popular`}
            offers = {offers}
            allOffers={offers}
            favoriteOffers={offers}
            cities = {cities}
            currentCity={currentCity}
            nearOffers={[]}
            login = {() => {}}
            returnToMain = {() => {}}
            onHeaderClick = {() => {}}
            loadComments = {() => {}}
            onLoadFavoriteOffers = {() => {}}
            changeFavoriteStatus = {() => {}}
            onCardHeaderClick = {() => {}}/>
        </Provider>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }})
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
