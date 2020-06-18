
import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

const offers = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 4,
    type: `Apartment`,
    isItPremium: true,
  },
  {
    description: `Wood and stone place`,
    img: `img/room.jpg`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
  },
  {
    description: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
  },
  {
    description: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
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
