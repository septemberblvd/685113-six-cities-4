import * as React from "react";
import * as renderer from "react-test-renderer";
import SingIn from "./sing-in";
import {Router} from "react-router-dom";
import history from '../../history.js';
import {noop} from "../../utils";


it(`AuthScreen component render correctly`, () => {
  const tree = renderer.create(
      <Router history={history}>
        <SingIn
          authorizationStatus={`NO_AUTH`}
          // onReturnButtonClick={noop}
          onSubmit={noop}
        />
      </Router>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
