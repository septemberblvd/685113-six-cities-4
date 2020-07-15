import React from "react";
import renderer from "react-test-renderer";
import Error from "./error.jsx";

it(`Should Error render correctly`, () => {
  const tree = renderer
      .create(<Error />,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
