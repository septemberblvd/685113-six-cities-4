import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

const offersHeaders = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

it(`Render App`, () => {
  const tree = renderer
    .create(<App offersCount = {31}
      offersHeaders = {offersHeaders}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
