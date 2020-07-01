import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";


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
  reviews: [
    {
      reviewId: 14,
      reviewName: `Ozzy`,
      reviewAvatar: `src`,
      reviewGrade: 4,
      reviewText: `Id minim labore ut velit sit velit.Magna deserunt reprehenderit consequat elit cupidatat proident nostrud amet minim nulla.`,
      reviewTime: `May 8, 2016`,
    },
    {
      reviewId: 22,
      reviewName: `Mick`,
      reviewAvatar: `src`,
      reviewGrade: 2,
      reviewText: `Incididunt fugiat non aliqua eu nisi.Id Lorem cillum non voluptate nulla id fugiat Lorem exercitation irure ullamco enim veniam ullamco.`,
      reviewTime: `June 5, 2018`,
    },
  ],
  nearOffers: [1]
};

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`OfferCardComponent`, () => {
  it(`Should card be hovered`, () => {
    const onCardMouseEnter = jest.fn();
    const onHeaderClick = jest.fn();


    const offerCard = mount(
        <OfferCard
          key={userChoise.id + 1}
          offer={userChoise}
          onCardMouseEnter={onCardMouseEnter}
          onHeaderClick={onHeaderClick} />
    );

    const offerCardTwo = offerCard.find(`.place-card`);

    offerCardTwo.simulate(`mouseenter`, {preventDefault() {}});

    expect(onCardMouseEnter).toHaveBeenCalledTimes(1);
    expect(onCardMouseEnter.mock.calls[0][0]).toMatchObject(userChoise);
  });
});
