import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";

const offers = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    img: `src`,
    price: 234,
    rating: 4,
    type: `Apartment`,
    isItPremium: true,
  },
  {
    description: `Wood and stone place`,
    img: `src`,
    price: 122,
    rating: 5,
    type: `Private room`,
    isItPremium: false,
  },
  {
    description: `Canal View Prinsengracht`,
    img: `src`,
    price: 110,
    rating: 4,
    type: `Private room`,
    isItPremium: true,
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`MainScreenComponent`, () => {
  it(`Should header button be pressed`, () => {
    const onHeaderClick = jest.fn();

    const welcomeScreen = mount(
        <MainScreen
          offersCount = {31}
          offers = {offers}
          onHeaderClick = {onHeaderClick}/>
    );

    const headerButtons = welcomeScreen.find(`.tabs__item`);

    headerButtons.forEach((it) => it.simulate(`click`, {preventDefault() {}}));

    expect(onHeaderClick).toHaveBeenCalledTimes(headerButtons.length);
  });
});


