import * as React from "react";
import {sortComments} from "../../utils";
import {connect} from "react-redux";
import ReviewsItem from "../reviews-item/reviews-item";
import {getCurrentComments} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {adaptComments} from "../../adapter/comments";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import CommentForm from "../comment-form/comment-form";
import {AuthorizationStatus} from "../../reducer/user/user";
import { Review } from "../../types";

interface Props {
  comments: Review[],
  id: number,
  onLoadComments: (id: number) => void,
  authorizationStatus: string,
};

class ReviewsList extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const {id, onLoadComments} = this.props;
    onLoadComments(id);
  }

  render() {
    const {comments, authorizationStatus, id} = this.props;
    const sortedComments = sortComments(comments)

    return (
      <section className="property__reviews reviews">
        <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
        <ul className="reviews__list">
          {sortedComments.map((it) => <ReviewsItem
            key={it.reviewId}
            review={it}
          />)}
        </ul>
        {authorizationStatus === AuthorizationStatus.AUTH ? <CommentForm id={id}/> : ``}
      </section>
    );
  }
}

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
