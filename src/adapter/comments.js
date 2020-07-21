const adaptComment = (comment) => {
  return {
    reviewId: comment.id,
    authorId: comment.user.id,
    reviewName: comment.user.name,
    reviewAvatar: comment.user.avatar_url,
    reviewGrade: comment.rating,
    reviewText: comment.comment,
    reviewTime: comment.date,
    isPro: comment.user.is_pro,
  };
};

const adaptComments = (comments) => {
  const commentsAll = comments.map((comment) => adaptComment(comment));
  return commentsAll;
};
export {adaptComment, adaptComments};
