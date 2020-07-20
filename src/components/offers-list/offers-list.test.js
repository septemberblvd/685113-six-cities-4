import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";
import {BrowserRouter} from "react-router-dom";

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
const onHeaderClick = jest.fn();
const onCardMouseEnter = jest.fn();
const onCardMouseLeave = jest.fn();
const changeFavoriteStatus = jest.fn();

describe(`OffersList`, () => {
  it(`Should OffersList render correctly`, () => {
    const tree = renderer
        .create(
            <BrowserRouter>
              <OffersList offers={offers}
                onHeaderClick={onHeaderClick}
                onCardMouseLeave={onCardMouseLeave}
                changeFavoriteStatus={changeFavoriteStatus}
                onCardMouseEnter={onCardMouseEnter}/>
            </BrowserRouter>, {
              createNodeMock: () => {
                return document.createElement(`div`);
              }
            }
        )

        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
