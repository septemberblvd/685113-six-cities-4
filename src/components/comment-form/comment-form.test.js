import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import React from "react";
import renderer from "react-test-renderer";
import {CommentForm} from "./comment-form.jsx";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

describe(`CommentForm`, () => {
  it(`Render CommentForm`, () => {
    const store = mockStore({
      [NameSpace.DATA]: {
        newComment: null,
        newRating: null,
      },
    });
    const tree = renderer
    .create(
        <Provider store={store}>
          <CommentForm
            newComment={null}
            newRating={null}
            id={1}
            sendStatus={false}
            isError={false}
            onChangeSendStatus={() => {}}
            onCommentChange={() => {}}
            onRatingChange={() => {}}
            onCommentUpload={() => {}}/>
        </Provider>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }})
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
