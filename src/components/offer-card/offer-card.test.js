import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offers = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 4,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
  },
  {
    description: `Canal View Prinsengracht`,
    img: `src`,
    price: 138,
    rating: 2,
    type: `Apartment`,
    isItPremium: true,
    id: 2,
  },
  {
    description: `Nice, cozy, warm big bed apartment`,
    img: `src`,
    price: 180,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
    id: 3,
  },
  {
    description: `Nice, cozy`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 4,
  },
];

const onCardMouseEnter = () => {};

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
      .create(offers.map((it, i) => <OfferCard
        key={it.description + i}
        offer={it}
        onCardMouseEnter={onCardMouseEnter} />))
      .toJSON();

  expect(tree).toMatchSnapshot();
});
