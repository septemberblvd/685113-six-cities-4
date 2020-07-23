import Error from "../error/error";
import * as React from "react";
import {adaptComments} from "../../adapter/comments";
import {connect} from "react-redux";
import {getNewComment, getNewRating, getSendStatus, getErrorStatus} from "../../reducer/data/selectors";
import {Operation as DataOperation, ActionCreator} from "../../reducer/data/data";
import {Comment} from "../../types";

const ratingFields = [
  {
    value: 5,
    title: `perfect`
  },
  {
    value: 4,
    title: `good`
  },
  {
    value: 3,
    title: `not bad`
  },
  {
    value: 2,
    title: `badly`
  },
  {
    value: 1,
    title: `terribly`
  },
];

interface Props {
  id: number,
  newComment: string,
  newRating: string,
  onCommentChange: (comment: string) => void,
  onRatingChange: (rating: string) => void,
  onCommentUpload: (comment: Comment,
    adaptCallback: () => void,
    id: number,
    sendStatus: boolean) => void,
  sendStatus: boolean,
  onChangeSendStatus: (sendStatus: boolean) => void,
  isError: boolean,
};

class CommentForm extends React.PureComponent<Props, {}> {
  private commentRef: React.RefObject<HTMLTextAreaElement>;
  private ratingRef: React.RefObject<HTMLInputElement>;
  private formRef: React.RefObject<HTMLFormElement>;
  private buttonRef: React.RefObject<HTMLInputElement>;

  constructor(props) {
    super(props);

    this.commentRef = React.createRef();
    this.ratingRef = React.createRef();
    this.formRef = React.createRef();
    this.buttonRef = React.createRef();

    this._handleChangeComment = this._handleChangeComment.bind(this);
    this._handleChangeRating = this._handleChangeRating.bind(this);
    this._handleCommentSubmit = this._handleCommentSubmit.bind(this);
    this._changeFormAccess = this._changeFormAccess.bind(this);
    this._isItValid = this._isItValid.bind(this);
  }

  _handleChangeComment(evt) {
    const {onCommentChange} = this.props;

    evt.preventDefault();

    if (this._isItValid()) {
      this.commentRef.current.style.backgroundColor = ``;
    }
    onCommentChange(this.commentRef.current.value);
  }

  _handleChangeRating(evt) {
    const {onRatingChange} = this.props;
    this._isItValid();
    onRatingChange(evt.target.value);
  }

  _handleCommentSubmit(evt) {
    const {onCommentUpload, newComment, newRating, id, sendStatus} = this.props;

    evt.preventDefault();
    this._changeFormAccess(true);

    if (this._isItValid()) {
      onCommentUpload(
          {
            comment: newComment,
            rating: newRating,
          },
          adaptComments,
          id,
          sendStatus
      );
    }
  }

  _isItValid() {
    const {newComment, newRating} = this.props;

    if (newComment && newRating) {
      if (newComment.length < 50 || newComment.length > 300) {
        return false;
      }
      return true;
    }
    return false;
  }

  _changeFormAccess(status) {

    if (status) {
      this.commentRef.current.setAttribute(`disabled`, `disabled`);
      this.buttonRef.current.setAttribute(`disabled`, `disabled`);
    } else {
      this.commentRef.current.removeAttribute(`disabled`);
      this.buttonRef.current.removeAttribute(`disabled`);
    }

  }

  componentDidUpdate() {
    const {sendStatus, onCommentChange, onRatingChange, onChangeSendStatus} = this.props;

    if (sendStatus) {
      onRatingChange(null);
      onCommentChange(null);
      this.commentRef.current.style.backgroundColor = ``;
      this.formRef.current.reset();
      this._changeFormAccess(false);
      onChangeSendStatus(sendStatus);
    }
  }

  render() {
    const {isError} = this.props;

    return (
      <form className="reviews__form form" action="#" ref={this.formRef} method="post" onSubmit={this._handleCommentSubmit}>
        {isError && <Error />}
        <label className="reviews__label form__label" htmlFor="review">Your review</label>
        <div className="reviews__rating-form form__rating">
          {ratingFields.map((it) => {
            return (
              <React.Fragment key={it.value}>
                <input className="form__rating-input visually-hidden"
                  onChange={this._handleChangeRating}
                  name="rating"
                  value={it.value}
                  id={`${it.value}-stars`}
                  type="radio"/>
                <label htmlFor={`${it.value}-stars`}
                  className="reviews__rating-label form__rating-label"
                  title={it.title}>
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </React.Fragment>
            );
          })}
        </div>
        <textarea className="reviews__textarea form__textarea"
          onChange={this._handleChangeComment}
          id="review"
          name="review"
          ref={this.commentRef}
          placeholder="Tell how was your stay, what you like and what can be improved">
        </textarea>
        <div className="reviews__button-wrapper">
          <p className="reviews__help">
            To submit review please make sure to set
            <span className="reviews__star">rating</span>
            and describe your stay with at least
            <b className="reviews__text-amount">50 characters</b>.
          </p>
          <button className="reviews__submit form__submit button" ref={this.buttonRef} type="submit" disabled={!this._isItValid()}>Submit</button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  newComment: getNewComment(state),
  newRating: getNewRating(state),
  sendStatus: getSendStatus(state),
  isError: getErrorStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCommentChange(comment) {
    dispatch(ActionCreator.changeNewComment(comment));
  },
  onRatingChange(rating) {
    dispatch(ActionCreator.changeNewRating(rating));
  },
  onCommentUpload(commentData, adaptCallback, id, sendStatus) {
    dispatch(DataOperation.uploadComment(commentData, adaptCallback, id, sendStatus));
  },
  onChangeSendStatus(sendStatus) {
    dispatch(ActionCreator.changeSendStatus(sendStatus));
  }
});

export {CommentForm};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
