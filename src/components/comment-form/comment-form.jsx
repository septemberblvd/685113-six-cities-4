import React, {PureComponent, createRef} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {Operation as DataOperation, ActionCreator} from "../../reducer/data/data.js";
import {getNewComment, getNewRating} from "../../reducer/data/selectors";
import {adaptComments} from "../../adapter/comments.js";

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


class CommentForm extends PureComponent {
  constructor(props) {
    super(props);

    this.commentRef = createRef();
    this.ratingRef = createRef();

    this._handleChangeComment = this._handleChangeComment.bind(this);
    this._handleChangeRating = this._handleChangeRating.bind(this);
    this._handleCommentSubmit = this._handleCommentSubmit.bind(this);
    this._isItValid = this._isItValid.bind(this);
  }
  _handleChangeComment(evt) {
    const {onCommentChange} = this.props;

    evt.preventDefault();
    if (this._isItValid()) {
      evt.target.querySelector(`.reviews__textarea`).style.backgroundColor = ``;
    }
    onCommentChange(this.commentRef.current.value);
  }

  _handleChangeRating(evt) {
    const {onRatingChange} = this.props;
    this._isItValid();
    onRatingChange(evt.target.value);
  }

  _handleCommentSubmit(evt) {
    const {onCommentUpload, newComment, newRating, id, onCommentChange, onRatingChange} = this.props;

    evt.preventDefault();
    if (this._isItValid()) {

      onCommentUpload(
          {
            comment: newComment,
            rating: newRating,
          },
          adaptComments,
          id,
          evt.target
      );
      onRatingChange(null);
      onCommentChange(null);
      evt.target.querySelector(`.reviews__textarea`).style.backgroundColor = ``;
    } else {
      evt.target.querySelector(`.reviews__textarea`).style.backgroundColor = `rgb(255, 96, 96)`;
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

  render() {
    const {newComment, newRating} = this.props;
    return (
      <form className="reviews__form form" action="#" method="post" onSubmit={this._handleCommentSubmit}>
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
          <button className="reviews__submit form__submit button" type="submit" disabled={!newComment || !newRating ? true : ``}>Submit</button>
        </div>
      </form>
    );
  }
}
CommentForm.propTypes = {
  id: PropTypes.number.isRequired,
  newComment: PropTypes.string,
  newRating: PropTypes.string,
  onCommentChange: PropTypes.func.isRequired,
  onRatingChange: PropTypes.func.isRequired,
  onCommentUpload: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  newComment: getNewComment(state),
  newRating: getNewRating(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCommentChange(comment) {
    dispatch(ActionCreator.changeNewComment(comment));
  },
  onRatingChange(rating) {
    dispatch(ActionCreator.changeNewRating(rating));
  },
  onCommentUpload(commentData, adaptCallback, id, form) {
    dispatch(DataOperation.uploadComment(commentData, adaptCallback, id, form));
  },
});

export {CommentForm};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
