import React from "react";
import renderer from "react-test-renderer";
import NearOffersMap from "./near-offers-map.jsx";

const ref = React.createRef();

it(`Should Map render correctly`, () => {
  const tree = renderer
      .create(<NearOffersMap mapRef={ref}/>,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
