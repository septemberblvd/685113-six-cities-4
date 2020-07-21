import React from "react";
import renderer from "react-test-renderer";
import SingIn from "./sing-in.jsx";
import {Router} from "react-router-dom";
import history from '../../history.js';


const noop = () => {};

it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SingIn
          authorizationStatus={`NO_AUTH`}
          onReturnButtonClick={noop}
          onSubmit={noop}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
