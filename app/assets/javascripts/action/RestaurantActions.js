var RestaurantActions = {
  receiveAllRestaurant: function(data) {
    var payload = {
      actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
      restaurants: data
    };
    appDispatcher.dispatch(payload);
  },
  receiveRestaurant: function(data) {
    var payload = {
      actionType: RestaurantConstants.ONE_RESTAURANT_RECEIVED,
      restaurants: data
    };
    appDispatcher.dispatch(payload);
  },
  updateReviews: function(data) {
    var payload = {
      actionType: RestaurantConstants.UPDATE_REVIEWS,
      restaurants: data
    };
    appDispatcher.dispatch(payload);
  },
  hoverActive: function(data) {
    var payload = {
      actionType: RestaurantConstants.HOVER_ACTIVE,
      restaurants: data
    };
    appDispatcher.dispatch(payload);
  },
  hoverReset: function() {
    var payload = {
      actionType: RestaurantConstants.HOVER_RESET,
    };
    appDispatcher.dispatch(payload);
  }
};
