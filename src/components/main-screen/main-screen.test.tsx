
import * as configureStore from "redux-mock-store";
import MainScreen from "./main-screen";
import NameSpace from "../../reducer/name-space";
import * as React from "react";
import * as renderer from "react-test-renderer";
import {Router} from "react-router-dom";
import {Provider} from "react-redux";
import history from '../../history.js';
import {noop} from "../../utils";


const mockStore = configureStore([]);

const offers = [
  {
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
describe(`MainScreen`, () => {
  it(`Should MainScreen render correctly`, () => {
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
      },
      [NameSpace.USER]: {
        authorizationStatus: `NO_AUTH`,
      }
    });
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router history={history}>
                <MainScreen
                  // isOpened={true}
                  // currentSortType={`Popular`}
                  offers = {offers}
                  cities={cities}
                  currentCity={currentCity}
                  activeOfferId={1}
                  userEmail={`Foo@mail.ru`}
                  onHeaderClick={noop}
                  // authorizationStatus={`NO_AUTH`}
                />
              </Router>
            </Provider>, {createNodeMock: () => {
              return document.createElement(`div`);
            }})
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

