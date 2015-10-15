var ReviewActions = {
  updateReviews: function(data) {
    var payload = {
      actionType: ReviewConstants.UPDATE_REVIEWS,
      reviews: data
    };
    appDispatcher.dispatch(payload);
  }
};
