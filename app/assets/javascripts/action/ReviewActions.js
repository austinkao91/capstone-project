var ReviewActions = {
  //updating reviews is for creating
  updateReviews: function(data) {
    var payload = {
      actionType: ReviewConstants.UPDATE_REVIEWS,
      reviews: data
    };
    appDispatcher.dispatch(payload);
  },
  deleteReviews: function(data) {
    var payload= {
      actionType: ReviewConstants.DELETE_REVIEW,
      reviews: data
    };
    appDispatcher.dispatch(payload);
  },
  //change reviews is for updating
  changeReviews: function(data) {
    var payload= {
      actionType: ReviewConstants.CHANGE_REVIEW,
      reviews: data
    };
    appDispatcher.dispatch(payload);
  }
};
