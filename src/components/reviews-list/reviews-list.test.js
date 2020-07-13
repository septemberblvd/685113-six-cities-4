import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list.jsx";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";

const mockStore = configureStore([]);

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

const onLoadComments = jest.fn();

describe(`ReviewsList`, () => {
  it(`Should ReviewsList render correctly`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        comments: [
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
        ],
      },
    });
    const tree = renderer
        .create(<Provider store={store}>
          <ReviewsList
            comments={comments}
            id={1}
            onLoadComments={onLoadComments} />
        </Provider>, {
          createNodeMock: () => {
            return document.createElement(`div`);
          }
        }
        )
        .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

