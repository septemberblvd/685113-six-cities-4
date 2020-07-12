import React from "react";
import renderer from "react-test-renderer";
import ReviewsList from "./reviews-list.jsx";

const comments = [
  {
    reviewId: 14,
    authorId: 21,
    reviewName: `Ozzy`,
    reviewAvatar: `src`,
    reviewGrade: 4,
    reviewText: `Id minim labore ut velit sit velit.Magna deserunt reprehenderit consequat elit cupidatat proident nostrud amet minim nulla.`,
    reviewTime: `May 8, 2016`,
    isPro: false,
  },
];

describe(`ReviewsList`, () => {
  it(`Should ReviewsList render correctly`, () => {
    const tree = renderer
        .create(<ReviewsList comments={comments} />, {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

