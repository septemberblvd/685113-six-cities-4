import * as React from "react";
import * as renderer from "react-test-renderer";
import NearOffersList from "./near-offers-list";
import {Router} from "react-router-dom";
import history from '../../history.js';

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

const onCardMouseEnter = jest.fn();
const onCardMouseLeave = jest.fn();
const onHeaderClick = jest.fn();
const changeFavoriteStatus = jest.fn();

describe(`NearOffersList`, () => {
  it(`Should NearOffersList render correctly`, () => {
    const tree = renderer
        .create(
            <Router history={history}>
              <NearOffersList nearOffers={offers}
                onHeaderClick={onHeaderClick}
                onCardMouseLeave={onCardMouseLeave}
                onCardMouseEnter={onCardMouseEnter}
                changeFavoriteStatus={changeFavoriteStatus}
              />
            </Router>
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

