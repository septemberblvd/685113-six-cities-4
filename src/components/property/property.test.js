import React from "react";
import renderer from "react-test-renderer";
import Property from "./property.jsx";

const offer = {
  title: `Wood and stone place`,
  img: `src`,
  price: 180,
  rating: 5,
  type: `Hotel`,
  isItPremium: true,
  id: 4,
  images: [
    `src`,
    `src`,
    `src`,
    `src`,
    `src`,
    `src`,
  ],
  description: `Some text`,
  bedrooms: 1,
  guests: 2,
  appliances: [
    `Wi-Fi`,
    `Baby seat`,
    `Kitchen`,
    `Dishwasher`,
    `Cabel TV`,
    `Fridge`,
  ],
  owner: {
    avatar: `src`,
    name: `Death`,
    isSuper: true,
  },
};

it(`Should OfferCard render correctly`, () => {
  const tree = renderer
      .create(<Property offer={offer}/>)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
