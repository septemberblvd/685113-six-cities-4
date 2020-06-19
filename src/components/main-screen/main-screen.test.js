
import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

const offers = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    img: `src`,
    price: 110,
    rating: 2,
    type: `Apartment`,
    isItPremium: true,
  },
  {
    description: `Wood and stone place`,
    img: `src`,
    price: 55,
    rating: 5,
    type: `Private room`,
    isItPremium: false,
  },
  {
    description: `Canal View Prinsengracht`,
    img: `src`,
    price: 138,
    rating: 2,
    type: `Apartment`,
    isItPremium: true,
  },
  {
    description: `Nice, cozy, warm big bed apartment`,
    img: `src`,
    price: 180,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
  },
];

it(`Should MainScreen render correctly`, () => {
  const tree = renderer
      .create(<MainScreen
        offersCount = {31}
        offers = {offers}
        onHeaderClick = {() => {}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
