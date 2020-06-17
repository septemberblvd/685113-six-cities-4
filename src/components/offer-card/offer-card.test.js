import React from "react";
import renderer from "react-test-renderer";
import OfferCard from "./offer-card.jsx";

const offersHeaders = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
];

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
      .create(offersHeaders.map((it, i) => <OfferCard
        key={it + i}
        offersHeader={it} />))
      .toJSON();

  expect(tree).toMatchSnapshot();
});
