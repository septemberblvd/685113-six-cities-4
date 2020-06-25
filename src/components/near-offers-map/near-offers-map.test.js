import React from "react";
import renderer from "react-test-renderer";
import NearOffersMap from "./near-offers-map.jsx";

it(`Should Map render correctly`, () => {
  const tree = renderer
      .create(<NearOffersMap/>,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
