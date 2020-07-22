import * as React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ReviewsItem = (props) => {
  const {review} = props;
  const {reviewName, reviewAvatar, reviewGrade, reviewText, reviewTime} = review;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={reviewAvatar} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviewName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${reviewGrade * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{moment(reviewTime).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: PropTypes.shape({
    reviewName: PropTypes.string.isRequired,
    reviewAvatar: PropTypes.string.isRequired,
    reviewGrade: PropTypes.number.isRequired,
    reviewText: PropTypes.string.isRequired,
    reviewTime: PropTypes.string.isRequired,
  }).isRequired
};

export default ReviewsItem;
