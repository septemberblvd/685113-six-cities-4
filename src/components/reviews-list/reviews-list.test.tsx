import * as React from "react";
import * as renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";

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
        sendStatus: false,
        isError: false,
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
            onLoadComments={onLoadComments}
            authorizationStatus={`NO_AUTH`} />
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

