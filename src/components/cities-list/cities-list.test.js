import * as React from "react";
import * as renderer from "react-test-renderer";
import {CitiesList} from "./cities-list";

const cities = [
  {
    cityName: `Paris`,
    cityCoords: [48.85341, 2.3488],
  },
];

const currentCity = {
  cityName: `Paris`,
  cityCoords: [48.85341, 2.3488],
};

describe(`CitiesList`, () => {
  it(`Should CitiesList render correctly`, () => {
    const tree = renderer
      .create(
          <CitiesList
            cities={cities}
            currentCity={currentCity}
            onCityClick={() => {}}
          />,
          {createNodeMock: () => {
            return document.createElement(`div`);
          }})
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

