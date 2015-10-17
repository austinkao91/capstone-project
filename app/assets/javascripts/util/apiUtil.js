(function(root) {
  'use strict';
  var parseTags = function(tags) {
    var tagArray = [];
    for(var props in tags) {
      if(tags[props]) tagArray.push(props);
    }
    return tagArray;
  };
  window.ApiUtil = {
    fetch: function(params) {
      params.tags = parseTags(params.tags);
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
        failuure: function(responseData) {
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
    }
  };

}(this));
