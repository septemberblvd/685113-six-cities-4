import React from "react";
import renderer from "react-test-renderer";
import SingIn from "./sing-in.jsx";
import {BrowserRouter} from "react-router-dom";


const noop = () => {};

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <BrowserRouter>
        <SingIn
          onReturnButtonClick={noop}
          onSubmit={noop}
        />
      </BrowserRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
