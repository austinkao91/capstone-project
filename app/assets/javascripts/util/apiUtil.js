(function(root) {
  'use strict';
  var parseTags = function(tags) {
    var tagArray = [];
    for(var props in tags) {
      if(tags[props]) tagArray.push(props);
    }
    return tagArray;
  };
  var parseLocation = function(location) {
    if(location.city === null || location.state === null) {
      return [];
    } else {
      return [location.city, location.state];
    }
  };

  var parseParams = function(params) {
    params.tags = parseTags(params.tags);
    params.location = parseLocation(params.location);
    return params;
  };

  window.ApiUtil = {
    fetch: function(params) {
      params = parseParams(params);
      $.ajax({
        url: 'api/restaurants',
        method: 'get',
        data: {filter: params},
        dataType: 'json',
        success: function(data) {
          RestaurantActions.receiveAllRestaurant(data);
        },
        failure: function(responseData) {
        }
      });
    },
    getOne: function(id) {
      $.ajax({
        url: 'api/restaurants/' + id,
        method: 'get',
        success: function(data) {
          RestaurantActions.receiveRestaurant(data);
        }
      });
    },
    updateRestaurant: function(restaurant) {
      $.ajax({
        url: 'api/restaurants/' + restaurant.id,
        method: 'patch',
        data: restaurant,
        success: function(responseData) {

        }
      });
    },
    create: function(params) {
      $.ajax({
        url: 'api/restaurants',
        method: 'post',
        data: {restaurant: params},
        success: function(responseData) {
          window.location = "/";
        }
      });
    },
    endSession: function() {
      $.ajax({
        url: '/session',
        method: 'delete',
        success: function(responseData) {
          window.location = "/";
        }
      });
    },
    createReview: function(data) {
      $.ajax({
        url: 'api/reviews',
        method: 'post',
        data: {review: data},
        success: function(responseData) {
          ReviewActions.updateReviews(responseData);
        }
      });
    },
    fetchTags: function() {
      $.ajax({
        url: '/api/tags',
        method: 'get',
        success: function(responseData) {
          TagActions.receiveAllTags(responseData);
        },
        failure: function(responseData) {
        }
      });
    },
    getTagDetails: function(id) {
      $.ajax({
        url: 'api/tags/' + id,
        method: 'get',
        success:function(responseData) {
          TagActions.receiveTag(responseData);
        }
      });
    },
    fetchUser: function(id) {
      $.ajax({
        url: 'api/user/' + id,
        method: 'get',
        success: function(responseData) {
          UserActions.receiveUser(responseData);
        }
      });
    },
    updateUser: function(data) {
      $.ajax({
        url: 'api/user/' + CURRENT_USER_ID,
        method: 'patch',
        data: {user: data},
        success: function(responseData) {
          UserActions.receiveUser(responseData);
        }
      });
    },
    fetchLocations: function() {
      $.ajax({
        url: 'api/locations',
        method: 'get',
        success: function(responseData) {
          LocationActions.receiveAllLocations(responseData);
        }
      });
    },
    updateLocation: function(id, data) {
      $.ajax({
        url: 'api/locations/' + id,
        method: 'patch',
        data: {id: id, location: data},
        success: function(responseData) {
          LocationActions.receiveLocation(responseData);
        }
      });
    }
  };

}(this));
