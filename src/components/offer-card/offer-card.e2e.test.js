import * as React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {Router} from "react-router-dom";
import history from '../../history.js';


const userChoise = {
  title: `Wood and stone place`,
  img: `src`,
  price: 80,
  rating: 5,
  type: `Apartment`,
  isItPremium: true,
  id: 1,
  cityName: `Paris`,
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
  coords: [52.39874984984841, 4.82456445558843],
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardComponent`, () => {
  it(`Should card be hovered`, () => {
    const onCardMouseEnter = jest.fn();
    const onCardMouseLeave = jest.fn();
    const onHeaderClick = jest.fn();
    const changeFavoriteStatus = jest.fn();

    const offerCard = mount(
        <Router history={history}>
          <OfferCard
            offer={userChoise}
            onCardMouseEnter={onCardMouseEnter}
            onCardMouseLeave={onCardMouseLeave}
            changeFavoriteStatus={changeFavoriteStatus}
            onHeaderClick={onHeaderClick} />
        </Router>
    );

    const offerCardTwo = offerCard.find(`.place-card`);

    offerCardTwo.simulate(`mouseenter`, {preventDefault() {}});

    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(userChoise);
  });
});
