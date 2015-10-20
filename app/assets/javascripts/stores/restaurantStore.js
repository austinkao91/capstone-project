(function(root) {
  'use strict';
  var _restaurants = [];
  var _display_restaurant = {};
  var CHANGE_EVENT = 'change';
  var RESTAURANT_DETAIL_CHANGE_EVENT = 'restaurantDetailChange';

  root.RestaurantStore = $.extend({}, EventEmitter.prototype, {
    all: function() {
      return _restaurants.slice();
    },
    addHandler: function(eventName, handler) {
      this.on(eventName, handler);
    },
    removeHandler: function(eventName, handler) {
      this.removeListener(eventName, handler);
    },
    change: function(eventName) {
      this.emit(eventName);
    },
    find: function(id) {
      var findRestaurant = {};
      _restaurants.forEach(function(restaurant, idx) {
        if( restaurant.id === id) { findRestaurant = restaurant; }
      });
      return findRestaurant;
    },
    dispatcherID: appDispatcher.register( function (payload) {
      switch (payload.actionType) {
        case 'received':
          root.RestaurantStore.addRestaurant(payload);
          root.RestaurantStore.change(RestaurantConstants.CHANGE_EVENT);
          break;
        case 'one_received':
          root.RestaurantStore.replaceRestaurant(payload);
          root.RestaurantStore.change(RestaurantConstants.CHANGE_EVENT);
          break;
        case 'update_reviews':
          root.RestaurantStore.updateReviews(payload);
          root.RestaurantStore.change(ReviewConstants.UPDATE_REVIEWS);
          root.RestaurantStore.change(RestaurantConstants.CHANGE_EVENT);
          break;
      }
    }),
    addRestaurant: function(payload) {
      _restaurants = payload.restaurants;
    },
    replaceRestaurant: function(payload) {
      _restaurants = [payload.restaurants];
      // _restaurants.forEach(function(restaurant, idx) {
      //   if(restaurant.id === payload.restaurants.id) {
      //     _restaurants[idx] = payload.restaurants;
      //   }
    },
    updateReviews: function(payload) {
      _restaurants.forEach(function(restaurant,idx) {
        if(restaurant.id === payload.reviews.restaurant_id) {
          _restaurants[idx].reviews.push(payload.reviews);
        }
      });
    }
  });



}(this));
