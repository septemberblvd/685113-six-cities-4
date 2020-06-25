import React from "react";
import renderer from "react-test-renderer";
import NearOffersItem from "./near-offers-item.jsx";

const offers = [
  {
    title: `Wood and stone place`,
    img: `src`,
    price: 80,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
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
  },
];

const onCardMouseEnter = () => {};
const onHeaderClick = () => {};

it(`Should NearOfferItem render correctly`, () => {
  const tree = renderer
      .create(offers.map((it, i) => <NearOffersItem
        key={it.id * Math.random() + i}
        offer={it}
        onCardMouseEnter={onCardMouseEnter}
        onHeaderClick={onHeaderClick} />),
      {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
