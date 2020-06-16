import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen";

const offersHeaders = [
  `Beautiful & luxurious apartment at great location`,
  `Wood and stone place`,
  `Canal View Prinsengracht`,
  `Nice, cozy, warm big bed apartment`,
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
          offersHeaders = {offersHeaders}
          onHeaderClick = {onHeaderClick}/>
    );

    const headerButtons = welcomeScreen.find(`.tabs__item`);

    headerButtons.forEach((it) => it.simulate(`click`, {preventDefault() {}}));

    expect(onHeaderClick).toHaveBeenCalledTimes(headerButtons.length);
  });
});


