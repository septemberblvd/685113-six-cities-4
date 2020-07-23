import * as configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import * as React from "react";
import * as renderer from "react-test-renderer";
import {CommentForm} from "./comment-form";
import {Provider} from "react-redux";
import {noop} from "../../utils";

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
            onChangeSendStatus={noop}
            onCommentChange={noop}
            onRatingChange={noop}
            onCommentUpload={noop}/>
        </Provider>,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }})
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
