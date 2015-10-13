var ApiUtil = {
  fetch: function() {
    $.ajax({
      url: 'api/restaurant',
      method: 'get',
      success: function(data) {
        RestaurantActions.receiveAllRestaurant(data);
      }
    });
  },
  getOne: function(id) {
    // debugger;
    $.ajax({
      url: 'api/restaurant/' + id,
      method: 'get',
      success: function(data) {
        RestaurantActions.receiveRestaurant(data);
      }
    });
  }
};
