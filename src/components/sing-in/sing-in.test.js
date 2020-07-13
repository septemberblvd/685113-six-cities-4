import React from "react";
import renderer from "react-test-renderer";
import SingIn from "./sing-in.jsx";


const noop = () => {};

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <SingIn
        onReturnButtonClick={noop}
        onSubmit={noop}
      />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
