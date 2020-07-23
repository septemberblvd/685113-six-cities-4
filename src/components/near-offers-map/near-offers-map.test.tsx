import * as React from "react";
import * as renderer from "react-test-renderer";
import NearOffersMap from "./near-offers-map";

const ref = React.createRef() as React.MutableRefObject<HTMLInputElement>;

it(`Should Map render correctly`, () => {
  const tree = renderer
      .create(<NearOffersMap mapRef={ref}/>,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
