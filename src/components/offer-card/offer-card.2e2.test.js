import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";

const offers = [
  {
    description: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 4,
    type: `Apartment`,
    isItPremium: true,
  },
  {
    description: `Wood and stone place`,
    img: `img/room.jpg`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
  },
  {
    description: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
  },
  {
    description: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
  },
];

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardComponent`, () => {
  it(`Should card be hovered`, () => {
    const onCardHover = jest.fn();

    const OfferCards = mount(
        offers.map((it, i) => <OfferCard
          key={it.description + i}
          offer={it}
          onCardHover={onCardHover} />)
    );

    const offerCardsAll = OfferCards.find(`.place-card`);
    const offerCardTwo = offerCardsAll.at[1];

    offerCardTwo.simulate(`mouseover`, {preventDefault() {}});

    expect(onCardHover).toHaveBeenCalledTimes(1);
  });
});
