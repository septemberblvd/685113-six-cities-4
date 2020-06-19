import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";


const userChoise = {
  description: `Wood and stone place`,
  img: `src`,
  price: 80,
  rating: 4,
  type: `Private room`,
  isItPremium: false,
  id: 2,
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardComponent`, () => {
  it(`Should card be hovered`, () => {
    const onCardMouseEnter = jest.fn();


    const offerCard = mount(
        <OfferCard
          key={userChoise.description + 1}
          offer={userChoise}
          onCardMouseEnter={onCardMouseEnter} />
    );

    const offerCardTwo = offerCard.find(`.place-card`);

    offerCardTwo.simulate(`mouseenter`, {preventDefault() {}});

    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(userChoise);
  });
});
