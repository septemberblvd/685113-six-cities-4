import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";

const ref = React.createRef();

it(`Should Map render correctly`, () => {
  const tree = renderer
      .create(<Map mapRef={ref}/>,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
