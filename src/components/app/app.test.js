import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offers = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    img: `src`,
    price: 156,
    rating: 2,
    type: `Apartment`,
    isItPremium: true,
  },
  {
    description: `Wood and stone place`,
    img: `src`,
    price: 141,
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
    isItPremium: false,
  },
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App offersCount = {31}
      offers = {offers}
      onHeaderClick = {() => {}}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
