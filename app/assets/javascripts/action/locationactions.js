var LocationActions = {
  receiveLocation: function(data) {
    var payload = {
      locations: data,
      actionType: LocationConstants.ONE_LOCATION_RECEIVED
    };
    appDispatcher.dispatch(payload);
  },
  receiveAllLocations: function(data) {
    var payload = {
      locations: data,
      actionType: LocationConstants.LOCATIONS_RECEIVED
    };
    appDispatcher.dispatch(payload);
  }
};
