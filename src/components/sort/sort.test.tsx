import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Sort} from './sort';
import {noop} from "../../utils";

it(`Should Sort render correctly`, () => {
  const tree = renderer
    .create(<Sort
      isOpened={true}
      currentSortType={`Popular`}
      onSort={noop}
      onShowSortMenu={noop}
    />, {createNodeMock: () => {
      return document.createElement(`div`);
    }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
