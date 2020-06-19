import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

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
    description: `Nice, cozy, warm big bed apartment`,
    img: `src`,
    price: 180,
    rating: 2,
    type: `Apartment`,
    isItPremium: true,
    id: 2,
  },
  {
    description: `Canal View Prinsengracht`,
    img: `img/apartment-03.jpg`,
    price: 150,
    rating: 3,
    type: `Apartment`,
    isItPremium: false,
    id: 4,
  },
];

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
      .create(<OffersList offers={offers}/>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
