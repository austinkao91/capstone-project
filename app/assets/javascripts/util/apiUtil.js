(function(root) {
  'use strict';
  var parseTags = function(tags) {
    var tagArray = [];
    for(var props in tags) {
      if(tags[props]) tagArray.push(props);
    }
    return tagArray;
  };
  var parseObject = function(object) {
    var arrayParams = [];
    for(var props in object) {
      if(object[props] === null) { continue;}
      arrayParams.push(object[props]);
    }
    return arrayParams;
  };

  var parseParams = function(params) {
    for(var props in params) {
      if(props === "tags") {
        params.tags = parseTags(params.tags);
      } else if(props === "holder"){
        continue;
      } else {
        params[props] = parseObject(params[props]);

      }
    }
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
          RestaurantActions.receiveRestaurant(responseData);
        }
      });
    },
    create: function(params) {
      $.ajax({
        url: 'api/restaurants',
        method: 'post',
        data: {restaurant: params},
        success: function(responseData) {
          window.location = "/#/restaurants/" + responseData.id;
        }
      });
    },
    endSession: function() {
      $.ajax({
        url: '/session',
        method: 'delete',
        success: function(responseData) {
          window.location = "/session/new";
        }
      });
    },
    deleteReview: function(data) {
      $.ajax({
        url: 'api/reviews/'+data.reviewId,
        method: 'delete',
        data: {review: data},
        success: function(responseData) {
          ReviewActions.deleteReviews(responseData);
        }
      });
    },
    updateReview: function(data) {
      $.ajax({
        url: 'api/reviews/'+data.reviewId,
        method: 'patch',
        data: {review: data},
        success: function(responseData) {
          ReviewActions.changeReviews(responseData);
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
