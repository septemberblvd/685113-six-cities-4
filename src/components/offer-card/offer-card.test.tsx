import * as React from "react";
import * as renderer from "react-test-renderer";
import OfferCard from "./offer-card";
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

const onCardMouseEnter = jest.fn();
const onCardMouseLeave = jest.fn();
const onHeaderClick = jest.fn();
const changeFavoriteStatus = jest.fn();

describe(`OfferCard`, () => {
  it(`Should OfferCard render correctly`, () => {
    const tree = renderer
        .create(
            <Router history={history}>
              <OfferCard
                offer={offers[0]}
                onCardMouseEnter={onCardMouseEnter}
                onCardMouseLeave={onCardMouseLeave}
                changeFavoriteStatus={changeFavoriteStatus}
                onHeaderClick={onHeaderClick} />
            </Router>,
            {
              createNodeMock: () => {
                return document.createElement(`div`);
              }
            })
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

