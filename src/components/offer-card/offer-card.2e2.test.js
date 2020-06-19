import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";

const offers = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    img: `src`,
    price: 140,
    rating: 4,
    type: `Apartment`,
    isItPremium: true,
  },
  {
    description: `Wood and stone place`,
    img: `src`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
  },
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

const userChoise = {
  description: `Wood and stone place`,
  img: `src`,
  price: 80,
  rating: 4,
  type: `Private room`,
  isItPremium: false,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardComponent`, () => {
  it(`Should card be hovered`, () => {
    const onCardMouseEnter = jest.fn();


    const OfferCards = mount(
        <OfferCard
          key={offers[1].description + 1}
          offer={offers[1]}
          onCardMouseEnter={onCardMouseEnter} />
    );

    const offerCardTwo = OfferCards.find(`.place-card`);

    offerCardTwo.simulate(`mouseenter`, {preventDefault() {}});

    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(userChoise);
  });
});
