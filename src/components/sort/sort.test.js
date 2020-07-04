import React from 'react';
import renderer from 'react-test-renderer';

import {Sort} from './sort.jsx';

it(`Should Sort render correctly`, () => {
  const tree = renderer
    .create(<Sort
      isOpened={true}
      currentSortType={`Popular`}
      onSort={() => {}}
      onShowSortMenu={() => {}}
    />, {createNodeMock: () => {
      return document.createElement(`div`);
    }})
    .toJSON();

  expect(tree).toMatchSnapshot();
});
