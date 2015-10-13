var RestaurantActions = {
  receiveAllRestaurant: function(data) {
    var payload = {
      actionType: RestaurantConstants.RESTAURANTS_RECEIVED,
      restaurants: data
    };
    restaurantDispatcher.dispatch(payload);
  },
  receiveRestaurant: function(data) {
    var payload = {
      actionType: RestaurantConstants.ONE_RESTAURANT_RECEIVED,
      restaurants: data
    };
    restaurantDispatcher.dispatch(payload);
  }
};
