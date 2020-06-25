import React from "react";
import renderer from "react-test-renderer";
import ReviewsItem from "./reviews-item.jsx";

const review = {
  reviewId: 14,
  reviewName: `Ozzy`,
  reviewAvatar: `src`,
  reviewGrade: 4,
  reviewText: `Id minim labore ut velit sit velit.Magna deserunt reprehenderit consequat elit cupidatat proident nostrud amet minim nulla.`,
  reviewTime: `May 8, 2016`,
};


it(`Should OfferCard render correctly`, () => {
  const tree = renderer
      .create(<ReviewsItem
        key={review.id * Math.random() + 1}
        review={review}
      />,
      {
        createNodeMock: () => {
          return {};
        }
      })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
