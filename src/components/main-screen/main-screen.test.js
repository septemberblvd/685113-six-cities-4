
import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

const offersHeaders = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

it(`Should MainScreen render correctly`, () => {
  const tree = renderer
      .create(<MainScreen
        offersCount = {31}
        offersHeaders = {offersHeaders}
        onHeaderClick = {() => {}}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
