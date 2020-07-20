import React, {PureComponent} from "react";
import {CommentType, MAX_COOMMENT_LENGTH} from "../../const";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import {getCurrentComments} from "../../reducer/data/selectors.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {adaptComments} from "../../adapter/comments.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import CommentForm from "../comment-form/comment-form.jsx";


class ReviewsList extends PureComponent {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {id, onLoadComments} = this.props;
    onLoadComments(id);
  }

  render() {
    const {comments, authorizationStatus, id} = this.props;
    const sortedComments = comments.slice(0, comments.length).sort((a, b) => new Date(b.reviewTime) - new Date(a.reviewTime)).slice(0, MAX_COOMMENT_LENGTH);

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ul className="reviews__list">
          {sortedComments.map((it) => <ReviewsItem
            key={it.reviewId}
            review={it}
          />)}
        </ul>
        {authorizationStatus ? <CommentForm id={id}/> : ``}
      </section>
    );
  }
}

ReviewsList.propTypes = {
  comments: CommentType,
  id: PropTypes.number.isRequired,
  onLoadComments: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  comments: getCurrentComments(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadComments(id) {
    dispatch(DataOperation.loadComments(adaptComments, id));
  },
});

export {ReviewsList};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
