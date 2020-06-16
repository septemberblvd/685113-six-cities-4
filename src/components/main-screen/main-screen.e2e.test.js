import React from "react";
import Enzyme, {shallow} from "enzyme";
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

    const welcomeScreen = shallow(
        <MainScreen
          offersCount = {31}
          offersHeaders = {offersHeaders}
          onHeaderClick = {onHeaderClick}/>
    );

    const headerButton = welcomeScreen.find(`tabs__item`);

    headerButton.forEach((it) => it.simulate(`click`));

    expect(onHeaderClick).toHaveBeenCalledTimes(1);
  });
});


