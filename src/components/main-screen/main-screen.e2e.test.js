import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";

const offers = [
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
    coords: [52.2342344555489, 4.4567464565458]
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
    coords: [55.3234234234555489, 4.824562342342358]
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainScreenComponent`, () => {
  it(`Should header button be pressed`, () => {
    const onHeaderClick = jest.fn();

    const mainScreen = mount(
        <MainScreen
          offersCount = {31}
          offers = {offers}
          onHeaderClick = {onHeaderClick}/>
    );

    const headerButtons = mainScreen.find(`.place-card__name a`);
    const headerButtonOne = headerButtons.at(0);

    headerButtonOne.simulate(`click`, {preventDefault() {}});

    expect(onHeaderClick).toHaveBeenCalledTimes(1);
  });
});


