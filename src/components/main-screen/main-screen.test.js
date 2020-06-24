
import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

const offers = [
  {
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
  },
  {
    title: `Canal View Prinsengracht`,
    img: `src`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
    id: 3,
    images: [
      `src`,
      `src`,
      `src`,
      `src`,
      `src`,
      `src`,
    ],
    description: `Some text`,
    bedrooms: 4,
    guests: 5,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    owner: {
      avatar: `src`,
      name: `War`,
      isSuper: true,
    },
  },
  {
    title: `Wood and stone place`,
    img: `src`,
    price: 80,
    rating: 5,
    type: `Apartment`,
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
    bedrooms: 2,
    guests: 3,
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
  },
];

it(`Should MainScreen render correctly`, () => {
  const tree = renderer
      .create(<MainScreen
        offersCount = {31}
        offers = {offers}
        onHeaderClick = {() => {}}
      />, {createNodeMock: () => {
        return document.createElement(`div`);
      }})
      .toJSON();

  expect(tree).toMatchSnapshot();
});
