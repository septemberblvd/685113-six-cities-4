import Error from "./error";
import * as React from "react";
import * as renderer from "react-test-renderer";

it(`Should Error render correctly`, () => {
  const tree = renderer
      .create(<Error />,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
